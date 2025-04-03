import {ProjectPreviewInterface} from '../types/projects.interface';

export const PROJECTS: ProjectPreviewInterface[] = [
  {
    id: 1,
    title: 'Grid Template',
    description: 'Шаблон, разработанный для демонстрации CSS3 Grid Layout. Так же реализован Responsive Design, отлично подходящий как для десктопных устройств, так и мобильных.',
    techStack: ['HTML', 'Scss', 'Javascript', 'jQuery'],
    images: {
      thumbnail: '/img/projects/grid_template_thumbnail.webp',
      large: '/img/projects/grid_template_large.webp',
    }
  },
  {
    id: 2,
    title: 'CRUD with Bootstrap',
    description: 'CRUD приложение для работы с базой данных покупателей, реализованное на Bootstrap а так же Firebase realtimeDatabase. Создана реактивная форма добавления покупателя с typeScript с кастомной валидацией. Так же есть возможность удаления и редактирования покупателя в таблице.',
    techStack: ['Angular 18+', 'RxJs', 'Bootstrap', 'TypeScript', 'Javascript',],
    images: {
      thumbnail: '/img/projects/crud_bootstrap_thumbnail.webp',
      large: '/img/projects/crud_bootstrap_large.webp',
    }
  },
  {
    id: 3,
    title: 'WoT Blitz Statistics',
    description: 'Приложение для анализа статистики WoT Blitz. Реализация фронтенда и бэкенда с использованием Angular, Firebase и Signals API.',
    techStack: ['Angular 18+', 'Firebase', 'Signals API', 'RxJs'],
    images: {
      thumbnail: '/img/projects/wot_blitz_statistics_thumbnail.webp',
      large: '/img/projects/wot_blitz_statistics_large.webp',
    }
  },
];
