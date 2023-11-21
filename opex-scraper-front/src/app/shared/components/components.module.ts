import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { CoreModule } from 'src/app/core/core.module';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    ThemeSwitcherComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
