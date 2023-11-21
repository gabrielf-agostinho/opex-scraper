import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'volumes',
        loadChildren: () => import('./modules/volumes/volumes.module').then(mod => mod.VolumesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
