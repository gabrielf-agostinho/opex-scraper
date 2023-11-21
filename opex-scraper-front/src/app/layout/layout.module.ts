import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule { }
