import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public credits: string = `OPEX Scraper - ${new Date().getFullYear()}`;
}
