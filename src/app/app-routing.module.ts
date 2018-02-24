import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppPageComponent} from './component/app-page/app-page.component';
import {AdminPageComponent} from './component/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppPageComponent
  },
  {
    path: 'app',
    component: AppPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
