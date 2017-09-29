import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutIndexComponent } from './about/about-index/about-index.component';
import { EventsIndexComponent } from './events/events-index/events-index.component';
import { ProDevIndexComponent } from './professional-dev/pro-dev-index/pro-dev-index.component';
import { SchoolComponent } from './knowledgecenter/school/school.component';
import { NewsIndexComponent } from './news/news-index/news-index.component';
import { MembershipComponent } from './membership/membership/membership.component';

const appRouters: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutIndexComponent },
  { path: 'events', component: EventsIndexComponent },
  { path: 'professional', component: ProDevIndexComponent },
  { path: 'knowledgecenter', component: SchoolComponent },
  { path: 'news', component: NewsIndexComponent },
  { path: 'membership', component: MembershipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
