import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid19Component } from './Component/covid19/covid19.component';


const routes: Routes = [
  {path: '', redirectTo: '/covid19', pathMatch: 'full'},
  {path: 'covid19', component: Covid19Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
