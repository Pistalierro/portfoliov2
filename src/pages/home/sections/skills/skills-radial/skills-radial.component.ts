import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {SkillCategoryType, SkillInterface} from '../../../../../types/skills-interface';
import {SKILL_CATEGORIES, SKILLS} from '../../../../../data/skills';
import {ScrollTrackerService} from '../../../../../shared/services/scroll/scroll-tracker.service';
import {drawLineAnimation, skillPopTrigger} from '../../../../../shared/animations/angular.animations';
import {TranslatePipe} from '@ngx-translate/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'section-skills-radial',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf, TranslatePipe, NgStyle],
  templateUrl: './skills-radial.component.html',
  styleUrl: './skills-radial.component.scss',
  animations: [drawLineAnimation, skillPopTrigger]
})
export class SkillsRadialComponent implements OnInit, AfterViewInit {
  categories: SkillCategoryType[] = SKILL_CATEGORIES;
  skills: SkillInterface[] = SKILLS;

  selectedCategory: SkillCategoryType = 'TECH.TABS.BASE';
  selectedSkill!: string;

  center = {x: 0, y: 0};
  radialLines: { x: number; y: number }[] = [];
  firstRender = true;

  animatedSkillIndexes: number[] = [];
  hovered: boolean[] = [];
  linesReady: boolean = false;

  positionStyles: Record<number, any> = {};

  scrollTrackerService = inject(ScrollTrackerService);

  @Output() skillSelected = new EventEmitter<string>();

  @ViewChild('centerCircle') centerCircleRef!: ElementRef<HTMLDivElement>;
  @ViewChildren('skillCircle') skillCircleRefs!: QueryList<ElementRef<HTMLDivElement>>;

  private generatedLayouts: Record<string, { x: number; y: number }[]> = {};

  get filteredSkills(): SkillInterface[] {
    return this.skills.filter(s => s.category === this.selectedCategory);
  }

  get selectedCategoryForCircle(): string {
    return `${this.selectedCategory}_CIRCLE`;
  }

  ngOnInit() {
    this.scrollTrackerService.observeSectionsForAnimation(['skills-radial'], '', 0.3);
  }

  ngAfterViewInit(): void {
    this.onSelectCategory(this.selectedCategory);
  }


  onSelectCategory(category: SkillCategoryType) {
    this.selectedCategory = category;
    this.selectedSkill = '';
    this.radialLines = [];
    this.linesReady = false;

    const skills = this.filteredSkills;
    if (!this.generatedLayouts[category]) {
      this.generatedLayouts[category] = this.generateRandomLayout(skills.length);
    }

    if (skills.length) {
      setTimeout(() => {
        this.selectedSkill = skills[0].name;
        this.skillSelected.emit(this.selectedSkill);
      });
    }

    this.animatedSkillIndexes = [];

    setTimeout(() => {
      this.positionStyles = {};
      skills.forEach((_, i) => {
        this.positionStyles[i] = this.getPositionStyle(i);
      });
    });

    setTimeout(() => {
      this.animatedSkillIndexes = skills.map((_, i) => i);
    }, 20);

    const renderLines = () => {
      this.calculateLines();
      this.linesReady = true;
    };

    if (this.firstRender) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          renderLines();
          this.firstRender = false;
        }, 300);
      });
    } else {
      setTimeout(renderLines, 300);
    }
  }

  onSelectedSkill(skill: string) {
    this.selectedSkill = skill;
    this.skillSelected.emit(skill);
  }

  getPositionStyle(index: number): Record<string, string> {
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
      ? this.hovered[index] ? 1.1 : 1
      : 0.5;
  }

  private generateRandomLayout(count: number): { x: number; y: number }[] {
    const result: { x: number; y: number }[] = [];
    const width = window.innerWidth;

    const radiusX = width < 768 ? 150 : 220;      // чуть шире — чтобы ушли от центра
    const radiusY = width < 768 ? 100 : 130;      // не сплюснутые по вертикали
    const minCenter = width < 768 ? 100 : 120;    // отступ от центра (чтобы не липли)
    const minDist = width < 768 ? 90 : 120;       // чтобы кружки не пересекались


    let tries = 0;
    while (result.length < count && tries < 5000) {
      tries++;
      const angle = Math.random() * 2 * Math.PI;
      const x = Math.round(Math.cos(angle) * Math.random() * radiusX);
      const y = Math.round(Math.sin(angle) * Math.random() * radiusY);
      if (Math.hypot(x, y) < minCenter) continue;
      if (result.every(p => Math.hypot(p.x - x, p.y - y) >= minDist)) {
        result.push({x, y});
      }
    }
    return result;
  }

  private calculateLines(): void {
    if (!this.centerCircleRef) return;

    const parentRect = this.centerCircleRef.nativeElement.offsetParent!
      .getBoundingClientRect();
    const centerRect = this.centerCircleRef.nativeElement.getBoundingClientRect();

    this.center = {
      x: centerRect.left + centerRect.width / 2 - parentRect.left,
      y: centerRect.top + centerRect.height / 2 - parentRect.top
    };
    this.radialLines = this.generatedLayouts[this.selectedCategory]
      .map(p => ({x: this.center.x + p.x, y: this.center.y + p.y}));
  }

}
