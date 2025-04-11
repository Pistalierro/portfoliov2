import {Component, inject, OnInit} from '@angular/core';
import {ProjectDetailedInterface} from '../../../types/projects.interface';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  imports: [
    NgForOf,
    TranslatePipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {

  project!: ProjectDetailedInterface;
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.project = this.activatedRoute.snapshot.data['project'];
  }
}
