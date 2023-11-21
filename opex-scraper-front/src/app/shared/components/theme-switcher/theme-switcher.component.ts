import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/layout.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  constructor(private _layoutService: LayoutService) { }

  public getIcon(): string {
    return this._layoutService.theme === 'light' ? 'pi pi-moon' : 'pi pi-sun';
  }

  public getClass(): string {
    return this._layoutService.getButtonClass();
  }

  public switchTheme(): void {
    this._layoutService.theme === 'light' ? this._layoutService.theme = 'dark' : this._layoutService.theme = 'light';
  }
}
