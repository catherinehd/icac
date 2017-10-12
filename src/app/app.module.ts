import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ShareModule } from './share/share.module';

import { AppComponent } from './app.component';

import { AboutIndexComponent } from './about/about-index/about-index.component';
import { EventsIndexComponent } from './events/events-index/events-index.component';
import { ProDevIndexComponent } from './professional-dev/pro-dev-index/pro-dev-index.component';
import { SchoolComponent } from './knowledgecenter/school/school.component';
import { NewsIndexComponent } from './news/news-index/news-index.component';
import { MembershipComponent } from './membership/membership/membership.component';
import { RegisterComponent } from './register/register/register.component';
import { PersonComponent } from './person/person.component';
import { PersonalDataComponent } from './person/personal-data/personal-data.component';
import { ModifyPasswordComponent } from './person/modify-password/modify-password.component';
import { DetailComponent } from './events/detail/detail.component';
import { SchooldetailComponent } from './knowledgecenter/schooldetail/schooldetail.component';


@NgModule({
  imports: [
    BrowserModule, HomeModule, AppRoutingModule, ShareModule,
  ],
  declarations: [
    AppComponent, AboutIndexComponent, EventsIndexComponent, ProDevIndexComponent, SchoolComponent, NewsIndexComponent, MembershipComponent, RegisterComponent, PersonComponent, PersonalDataComponent, ModifyPasswordComponent, DetailComponent, SchooldetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
