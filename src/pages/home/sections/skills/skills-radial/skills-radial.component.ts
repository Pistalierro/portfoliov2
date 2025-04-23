import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {SkillCategoryType, SkillInterface} from '../../../../../types/skills-interface';
import {SKILL_CATEGORIES, SKILLS} from '../../../../../data/skills';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'block-skills-radial',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf, NgStyle],
  templateUrl: './skills-radial.component.html',
  styleUrl: './skills-radial.component.scss',
})
export class SkillsRadialComponent implements AfterViewInit, OnChanges {

  categories: SkillCategoryType[] = SKILL_CATEGORIES;
  skills: SkillInterface[] = SKILLS;

  selectedCategory!: SkillCategoryType;
  selectedSkill!: string;

  activeClass = 'bg-gradient-to-br from-orange-400 to-orange-600 text-black';
  baseClass = 'bg-black/30 text-white hover:bg-black/50';

  center = {x: 0, y: 0};
  radialLines: { x: number; y: number }[] = [];
  justRendered = false;
  animatedSkillIndexes: number[] = [];

  hovered: boolean[] = [];
  @Input() isSliding = false;
  @Input() resetTrigger = 0;

  @ViewChild('centerCircle') centerCircleRef!: ElementRef<HTMLDivElement>;
  @ViewChildren('skillCircle') skillCircleRefs!: QueryList<ElementRef<HTMLDivElement>>;

  @Output() skillSelected = new EventEmitter<string>();

  private generatedLayouts: Record<string, { x: number, y: number }[]> = {};

  get filteredSkills(): SkillInterface[] {
    return this.selectedCategory
      ? this.skills.filter(skill => skill.category === this.selectedCategory)
      : [];
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.calculateLines(), 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetTrigger']) {
      this.forceRecalculate();
    }
  }

  onSelectCategory(category: SkillCategoryType) {
    this.selectedCategory = category;
    this.selectedSkill = '';

    if (!this.generatedLayouts[category]) {
      this.generatedLayouts[category] = this.generateRandomLayout(this.filteredSkills.length);
    }

    this.animatedSkillIndexes = [];

    setTimeout(() => {
      this.animatedSkillIndexes = this.filteredSkills.map((_, i) => i);
    }, 20);

    setTimeout(() => {
      this.calculateLines();
    }, 0);
  }

  onSelectedSkill(skill: string) {
    this.selectedSkill = skill;
    this.skillSelected.emit(skill);
  }

  getPositionStyle(index: number): { [key: string]: string } {
    const pos = this.generatedLayouts[this.selectedCategory]?.[index];

    return {
      '--x': `${pos.x}px`,
      '--y': `${pos.y}px`,
      '--scale': '1',
      transform: 'translate(var(--x), var(--y)) scale(var(--scale))'
    };
  }

  getScale(index: number): number {
    if (!this.animatedSkillIndexes.includes(index)) return 0.5;
    return this.hovered[index] ? 1.1 : 1;
  }

  private forceRecalculate(): void {
    setTimeout(() => {
      if (!this.selectedCategory) return;

      this.animatedSkillIndexes = this.filteredSkills.map((_, i) => i);
      this.calculateLines();
    });
  }

  private generateRandomLayout(count: number): { x: number; y: number }[] {
    const result: { x: number; y: number }[] = [];
    const maxAttempts = 200;
    const minDistance = 100;
    const minFromCenter = 120; // отступ от центральной категории
    const radiusX = 220;
    const radiusY = 130;

    let attempts = 0;

    while (result.length < count && attempts < maxAttempts) {
      const angle = Math.random() * 2 * Math.PI;
      const distanceX = Math.random() * radiusX;
      const distanceY = Math.random() * radiusY;
      const x = Math.round(Math.cos(angle) * distanceX);
      const y = Math.round(Math.sin(angle) * distanceY);

      const isFarFromOthers = result.every(p => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) >= minDistance;
      });

      const isFarFromCenter = Math.sqrt(x * x + y * y) >= minFromCenter;

      if (isFarFromOthers && isFarFromCenter) {
        result.push({x, y});
      }

      attempts++;
    }

    return result;
  }

  private calculateLines(): void {
    if (!this.centerCircleRef) return;

    const containerRect = this.centerCircleRef.nativeElement.offsetParent!.getBoundingClientRect();
    const centerRect = this.centerCircleRef.nativeElement.getBoundingClientRect();

    this.center = {
      x: centerRect.left + centerRect.width / 2 - containerRect.left,
      y: centerRect.top + centerRect.height / 2 - containerRect.top,
    };

    this.radialLines = (this.generatedLayouts[this.selectedCategory] || []).map(pos => ({
      x: this.center.x + pos.x,
      y: this.center.y + pos.y,
    }));
  }
}
