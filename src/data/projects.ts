import {ProjectPreviewInterface} from '../types/projects.interface';

export const PROJECTS: ProjectPreviewInterface[] = [
  {
    id: 1,
    title: 'WoT Blitz Statistics',
    description: 'Приложение для анализа статистики WoT Blitz. Реализация фронтенда и бэкенда с использованием Angular, Firebase и Signals API. В основе — сложные вычисления на основе боевой статистики игроков.',
    techStack: [
      'Angular 18+',
      'RxJs',
      'Signals',
      'TypeScript',
      'REST API',
      'Firebase',
      'Firebase Auth',
      'Cloud Functions'
    ],
    images: {
      thumbnail: '/img/projects/wot_blitz_statistics_thumbnail.webp',
      large: '/img/projects/wot_blitz_statistics_large.webp',
    }
  },
  {
    id: 2,
    title: 'Weather Forecast',
    description: 'Приложение прогноза погоды с отображением текущих условий, почасового прогноза и прогноза на 5 дней. Поддерживается определение погоды по геолокации и вводу названия города.',
    techStack: [
      'Angular 18+',
      'RxJs',
      'TypeScript',
      'REST API',
      'OpenWeatherMap',
      'Responsive UI'
    ],
    images: {
      thumbnail: '/img/projects/weather_forecast_thumbnail.webp',
      large: '/img/projects/weather_forecast_large.webp',
    }
  },
  {
    id: 3,
    title: 'JS Slider',
    description: 'Кастомный слайдер на чистом JavaScript с авто-прокруткой, управлением через кнопки, индикаторы, клавиатуру и касания. Динамически формирует DOM, легко настраивается через конфиг. Поддерживает как базовую, так и адаптированную мобильную версию без jQuery.',
    techStack: [
      'HTML5',
      'SCSS',
      'JavaScript (Vanilla)',
      'BEM',
      'Responsive Design'
    ],
    images: {
      thumbnail: '/img/projects/js_slider_thumbnail.webp',
      large: '/img/projects/js_slider_large.webp',
    }
  },
  {
    id: 4,
    title: 'Grid Template',
    description: 'Шаблон для демонстрации возможностей CSS Grid Layout с акцентом на адаптивную вёрстку. Реализована поддержка десктопных и мобильных устройств, а также базовые интерактивные элементы с использованием jQuery.',
    techStack: ['HTML5', 'SCSS', 'JavaScript', 'jQuery', 'CSS Grid', 'Responsive Design'],
    images: {
      thumbnail: '/img/projects/grid_template_thumbnail.webp',
      large: '/img/projects/grid_template_large.webp',
    }
  },
  {
    id: 5,
    title: 'CRUD with Material UI',
    description: 'Приложение для управления базой данных товаров с использованием Angular Material. Реализованы функции добавления, редактирования и удаления записей. Используются реактивные формы, кастомные пайпы и элементы UI с продуманной адаптивной версткой.',
    techStack: ['Angular 18+', 'RxJs', 'TypeScript', 'Angular Material', 'Reactive Forms', 'SCSS'],
    images: {
      thumbnail: '/img/projects/crud_material_thumbnail.webp',
      large: '/img/projects/crud_material_large.webp',
    }
  },
  {
    id: 6,
    title: 'Kinozal',
    description: 'Адаптивный шаблон сайта кинотеатра, разработанный на Bootstrap 5.3.3. Используется гибкая flex-сетка, формы авторизации и поиска, а также базовая логика взаимодействия с пользователем. Отлично подходит как стартовая точка для кино-проектов.',
    techStack: ['HTML', 'SCSS', 'Bootstrap 5', 'Flexbox'],
    images: {
      thumbnail: '/img/projects/kinozal_thumbnail.webp',
      large: '/img/projects/kinozal_large.webp',
    }
  },
  {
    id: 7,
    title: 'Movie Search',
    description: 'Web-приложение для поиска фильмов через OMDb API. Пользователь может вводить название фильма и получать подробную информацию о нём. Реализовано динамическое построение DOM, обработка ошибок и адаптивная верстка.',
    techStack: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap 5', 'OMDb API'],
    images: {
      thumbnail: '/img/projects/movie_search_thumbnail.webp',
      large: '/img/projects/movie_search_large.webp',
    }
  },
  {
    id: 8,
    title: 'CRUD with Bootstrap',
    description: 'CRUD-приложение для управления базой данных покупателей с использованием Firebase Realtime Database. Реализованы добавление, редактирование и удаление данных через реактивную форму с кастомной валидацией. Интерфейс построен на Bootstrap с адаптивной вёрсткой.',
    techStack: ['Angular 18+', 'RxJs', 'TypeScript', 'Bootstrap 5', 'Firebase RTDB', 'Reactive Forms'],
    images: {
      thumbnail: '/img/projects/crud_bootstrap_thumbnail.webp',
      large: '/img/projects/crud_bootstrap_large.webp',
    }
  },
  {
    id: 9,
    title: 'Currency Converter',
    description: 'Приложение для конвертации валют с актуальными курсами. Позволяет быстро рассчитать сумму обмена между различными валютами. Реализован адаптивный интерфейс с использованием Tailwind CSS.',
    techStack: ['Angular 18+', 'TypeScript', 'Tailwind CSS', 'REST API'],
    images: {
      thumbnail: '/img/projects/currancy_converter_thumbnail.webp',
      large: '/img/projects/currancy_converter_large.webp',
    }
  }
];
