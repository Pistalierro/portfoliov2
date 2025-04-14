import {Routes} from '@angular/router';
import {MainLayoutComponent} from '../layouts/main-layout/main-layout.component';
import {projectDetailsResolver} from '../pages/home/project-details/project-details.resolver';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/home/home.component')
          .then(m => m.HomeComponent),
      },
      {
        path: 'portfolio/:slug',
        loadComponent: () => import('../pages/home/project-details/project-details.component')
          .then(m => m.ProjectDetailsComponent),
        resolve: {
          project: projectDetailsResolver
        }
      },
    ]
  },
  {path: '**', redirectTo: ''},
];
