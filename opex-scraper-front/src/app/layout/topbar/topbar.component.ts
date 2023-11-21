import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {
  constructor() { }

  public menu: Array<MenuItem> = [];

  public async ngOnInit(): Promise<void> {
    this.menu = [
      {
        label: 'Mangá',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Todos os volumes',
            routerLink: ['/volumes']
          }
        ]
      }
    ]
  }
}
