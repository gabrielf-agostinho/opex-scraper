import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolumesListComponent } from './volumes-list/volumes-list.component';

const routes: Routes = [
  {
    path: '',
    component: VolumesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolumesRoutingModule { }
