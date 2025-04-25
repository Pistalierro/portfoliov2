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
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {SkillCategoryType, SkillInterface} from '../../../../../types/skills-interface';
import {SKILL_CATEGORIES, SKILLS} from '../../../../../data/skills';

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

  selectedCategory: SkillCategoryType = 'Languages';
  selectedSkill!: string;

  center = {x: 0, y: 0};
  radialLines: { x: number; y: number }[] = [];
  animatedSkillIndexes: number[] = [];
  hovered: boolean[] = [];

  @Input() resetTrigger = 0;
  @Output() skillSelected = new EventEmitter<string>();

  @ViewChild('centerCircle') centerCircleRef!: ElementRef<HTMLDivElement>;
  @ViewChildren('skillCircle') skillCircleRefs!: QueryList<ElementRef<HTMLDivElement>>;

  private generatedLayouts: Record<string, { x: number; y: number }[]> = {};

  get filteredSkills(): SkillInterface[] {
    return this.skills.filter(s => s.category === this.selectedCategory);
  }

  ngAfterViewInit(): void {
    // показываем первый выбранный набор
    this.onSelectCategory(this.selectedCategory);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetTrigger']) {
      // ресет анимации кружков и линий
      setTimeout(() => {
        this.animatedSkillIndexes = this.filteredSkills.map((_, i) => i);
        this.calculateLines();
      });
    }
  }

  onSelectCategory(category: SkillCategoryType) {
    this.selectedCategory = category;
    this.selectedSkill = '';

    // сброс
    this.radialLines = [];

    // готовим layout
    const skills = this.filteredSkills;
    if (!this.generatedLayouts[category]) {
      this.generatedLayouts[category] = this.generateRandomLayout(skills.length);
    }

    // первый скилл по-умолчанию
    if (skills.length) {
      this.selectedSkill = skills[0].name;
      this.skillSelected.emit(this.selectedSkill);
    }

    // анимация кружков
    this.animatedSkillIndexes = [];
    setTimeout(() => (this.animatedSkillIndexes = skills.map((_, i) => i)), 20);

    // отрисовать линии после того, как кружки начнут выезжать
    setTimeout(() => this.calculateLines(), 50);
  }

  onSelectedSkill(skill: string) {
    this.selectedSkill = skill;
    this.skillSelected.emit(skill);
  }

  getPositionStyle(index: number): { [key: string]: string } {
    const pos = this.generatedLayouts[this.selectedCategory]?.[index];
    if (!pos) {
      return {'--x': '0px', '--y': '0px', transform: 'translate(0,0) scale(0.5)'};
    }
    return {
      '--x': `${pos.x}px`,
      '--y': `${pos.y}px`,
      transform: `translate(${pos.x}px,${pos.y}px) scale(1)`
    };
  }

  getScale(index: number): number {
    return this.animatedSkillIndexes.includes(index)
      ? this.hovered[index]
        ? 1.1
        : 1
      : 0.5;
  }

  private generateRandomLayout(count: number): { x: number; y: number }[] {
    const result: { x: number; y: number }[] = [];
    const radiusX = 220;
    const radiusY = 130;
    const minCenter = 120;
    const minDistance = 100;

    while (result.length < count) {
      const angle = Math.random() * 2 * Math.PI;
      const x = Math.round(Math.cos(angle) * (Math.random() * radiusX));
      const y = Math.round(Math.sin(angle) * (Math.random() * radiusY));

      if (Math.hypot(x, y) < minCenter) continue;
      if (result.every(p => Math.hypot(p.x - x, p.y - y) >= minDistance)) {
        result.push({x, y});
      }
    }
    return result;
  }

  private calculateLines(): void {
    if (!this.centerCircleRef) return;
    const parentRect = this.centerCircleRef.nativeElement.offsetParent!.getBoundingClientRect();
    const centerRect = this.centerCircleRef.nativeElement.getBoundingClientRect();

    this.center = {
      x: centerRect.left + centerRect.width / 2 - parentRect.left,
      y: centerRect.top + centerRect.height / 2 - parentRect.top
    };

    this.radialLines = this.generatedLayouts[this.selectedCategory].map(p => ({
      x: this.center.x + p.x,
      y: this.center.y + p.y
    }));
  }
}
