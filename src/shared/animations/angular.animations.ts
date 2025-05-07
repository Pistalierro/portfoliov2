import {animate, animation, state, style, transition, trigger, useAnimation} from '@angular/animations';

export const drawLineAnimation = trigger('drawLine', [
  state('ready', style({'attr.stroke-dashoffset': 0})),
  transition('* => ready', [
    style({
      'attr.stroke-dasharray': '200, 200',
      'attr.stroke-dashoffset': 200
    }),
    animate('0.6s ease-out')
  ])
]);

export const skillPopTrigger = trigger('skillPop', [
  transition(':enter', useAnimation(
    animation([
      style({
        transform: 'translate(0, 0) scale(0)',
        opacity: 0
      }),
      animate('{{ duration }} ease-out', style({
        transform: 'translate(var(--x), var(--y)) scale(1)',
        opacity: 1
      }))
    ]),
    {params: {duration: '0.5s'}}
  ))
]);
