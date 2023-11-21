import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    TableModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    PanelModule,
    TableModule
  ]
})
export class CoreModule { }
