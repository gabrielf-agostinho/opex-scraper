import { trigger, transition, style, query, animate } from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter', [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
          transform: 'scale(0.97)',
        }),
      ],
        { optional: true }
      ),
      query(':leave', [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 1,
          transform: 'scale(1)',
        }),
      ],
        { optional: true }
      ),
      query(':leave', [
        animate('400ms ease', style({ opacity: 0, transform: 'scale(1.01)' })),
      ],
        { optional: true }
      ),
      query(':enter', [
        animate('500ms ease', style({ opacity: 1, transform: 'scale(1)' })),
      ],
        { optional: true }
      ),
    ]),
  ]);