import { Component } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { fader } from '../animations/fader';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  animations: [
    fader
  ]
})
export class MainComponent {
  public prepareRoute(outlet: RouterOutlet): Data {
    return outlet && outlet.activatedRouteData;
  }
}
