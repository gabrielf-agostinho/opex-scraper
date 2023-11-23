import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, fromEvent, map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

  readonly showScroll$: Observable<boolean> =
    fromEvent(window, 'scroll')
      .pipe(
        untilDestroyed(this),
        map(() => this.viewportScroller.getScrollPosition()?.[1] > 0)
      );

  constructor(private viewportScroller: ViewportScroller) { }

  public scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
