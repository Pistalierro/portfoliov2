import {ResolveFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {ProjectPreviewInterface} from '../../../types/projects.interface';
import {PROJECTS} from '../../../data/projects';

export const projectDetailsResolver: ResolveFn<ProjectPreviewInterface | null> = (route) => {

  const router = inject(Router);
  const slug = route.paramMap.get('slug');

  if (!slug) {
    void router.navigate(['/']);
    return null;
  }

  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    void router.navigate(['/']);
    return null;
  }

  return project;
};
