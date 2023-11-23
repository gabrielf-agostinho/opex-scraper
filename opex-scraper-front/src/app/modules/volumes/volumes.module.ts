import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolumesRoutingModule } from './volumes-routing.module';
import { VolumesListComponent } from './volumes-list/volumes-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VolumesListComponent
  ],
  imports: [
    CommonModule,
    VolumesRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class VolumesModule { }
