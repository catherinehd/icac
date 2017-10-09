import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigateService } from './service/navigate.service';

import { AboutIndexComponent } from './about/about-index/about-index.component';
import { EventsIndexComponent } from './events/events-index/events-index.component';
import { ProDevIndexComponent } from './professional-dev/pro-dev-index/pro-dev-index.component';
import { SchoolComponent } from './knowledgecenter/school/school.component';
import { NewsIndexComponent } from './news/news-index/news-index.component';
import { MembershipComponent } from './membership/membership/membership.component';
import { RegisterComponent } from './register/register/register.component';
import { PersonComponent } from './person/person.component';
import { PagenotfoundComponent } from './share/pagenotfound/pagenotfound.component';


const appRouters: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutIndexComponent },
  { path: 'events', component: EventsIndexComponent },
  { path: 'professional', component: ProDevIndexComponent },
  { path: 'knowledgecenter', component: SchoolComponent },
  { path: 'news', component: NewsIndexComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'person', component: PersonComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule],
  providers: [NavigateService],
})

export class AppRoutingModule {}
