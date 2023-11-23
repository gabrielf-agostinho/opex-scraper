import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { CoreModule } from 'src/app/core/core.module';
import { LoadingComponent } from './loading/loading.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';



@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    LoadingComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    ThemeSwitcherComponent,
    LoadingComponent,
    ScrollToTopComponent
  ]
})
export class ComponentsModule { }
