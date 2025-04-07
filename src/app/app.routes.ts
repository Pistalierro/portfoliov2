import {Routes} from '@angular/router';
import {projectDetailsResolver} from '../pages/home/project-details/project-details.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/home/sections/hero/hero.component')
      .then(m => m.HeroComponent),
  },
  {
    path: 'portfolio/:slug',
    loadComponent: () => import('../pages/home/project-details/project-details.component')
      .then(m => m.ProjectDetailsComponent),
    resolve: {project: projectDetailsResolver}
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
