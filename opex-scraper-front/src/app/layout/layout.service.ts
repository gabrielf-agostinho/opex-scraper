import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  public get theme(): string {
    const theme: string | null = localStorage.getItem('theme');

    return !theme ? 'light' : theme;
  }

  public set theme(theme: string) {
    localStorage.setItem('theme', theme);

    const link: HTMLLinkElement = document.querySelector('#theme') as HTMLLinkElement;

    link.href = `assets/themes/theme-${theme}.css`;
  }

  public getButtonClass(): string {
    let classes: string = 'p-button-rounded p-button-text';

    return this.theme === 'light' ? `${classes} p-button-secondary` : `${classes} p-button-primary`;
  }
}
