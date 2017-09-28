import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutIndexComponent } from './about/about-index/about-index.component';

const appRouters: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
