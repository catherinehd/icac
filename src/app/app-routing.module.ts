import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigateService } from './service/navigate.service';
import { UserService } from './service/user.service';
import { HttpClientService } from './service/http-client.service';
import { AppConfigService } from './service/app-config.service';

import { AboutIndexComponent } from './about/about-index/about-index.component';
import { AdvisorComponent } from './about/advisor/advisor.component';
import { CommitteeComponent } from './about/committee/committee.component';
import { ContactUsComponent } from './about/contact-us/contact-us.component';
import { EventsIndexComponent } from './events/events-index/events-index.component';
import { DetailComponent } from './events/detail/detail.component';
import { DetailWorkshopComponent } from './events/detail-workshop/detail-workshop.component';
import { ProDevIndexComponent } from './professional-dev/pro-dev-index/pro-dev-index.component';
import { ProDetailComponent } from './professional-dev/pro-detail/pro-detail.component';
import { SchoolComponent } from './knowledgecenter/school/school.component';
import { SchooldetailComponent } from './knowledgecenter/schooldetail/schooldetail.component'
import { NewsIndexComponent } from './news/news-index/news-index.component';
import { MembershipComponent } from './membership/membership/membership.component';
import { RegisterComponent } from './register/register/register.component';
import { PersonComponent } from './person/person.component';
import { PagenotfoundComponent } from './share/pagenotfound/pagenotfound.component';
import { EventsWorkshopComponent } from './events/events-workshop/events-workshop.component';
import { JobComponent } from './professional-dev/job/job.component';
import { SeniorSchoolComponent } from './knowledgecenter/senior-school/senior-school.component';
import { TransferComponent } from './knowledgecenter/transfer/transfer.component';
import { RankingComponent } from './knowledgecenter/ranking/ranking.component';
import { PublicationComponent } from './news/publication/publication.component';
import { ResearchComponent } from './news/research/research.component';
import { SeniorSchooldetailComponent } from './knowledgecenter/senior-schooldetail/senior-schooldetail.component';
import { ResetPwdComponent } from './person/reset-pwd/reset-pwd.component';
import { VerifyEmailComponent } from './person/verify-email/verify-email.component';
import { RegisterNocodeComponent } from './register/register-nocode/register-nocode.component';
import { LoginComponent } from './login/login.component';


const appRouters: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutIndexComponent },

      { path: 'about/overview', component: AboutIndexComponent },
      { path: 'about/committee', component: CommitteeComponent },
      { path: 'about/advisor', component: AdvisorComponent },
      { path: 'about/contact-us', component: ContactUsComponent },

  { path: 'events', component: EventsIndexComponent },

      { path: 'events/national', component: EventsIndexComponent },
      { path: 'events/workshop', component: EventsWorkshopComponent },
      { path: 'events/national/detail/:id', component: DetailComponent },
      { path: 'events/workshop/detail-workshop/:id', component: DetailWorkshopComponent },

  { path: 'professional', component: ProDevIndexComponent },

      { path: 'professional/webinar', component: ProDevIndexComponent },
      { path: 'professional/pro-job', component: JobComponent },
      { path: 'professional/pro-detail/:id', component: ProDetailComponent },

  { path: 'knowledgecenter', component: SchoolComponent },

      { path: 'knowledgecenter/university', component: SchoolComponent },
      { path: 'knowledgecenter/senior-school', component: SeniorSchoolComponent },
      { path: 'knowledgecenter/ranking', component: RankingComponent },
      { path: 'knowledgecenter/transfer', component: TransferComponent },
      { path: 'knowledgecenter/detail/:id', component: SchooldetailComponent },
      { path: 'knowledgecenter/seniorschool-detail/:id', component: SeniorSchooldetailComponent },

  { path: 'news', component: NewsIndexComponent },

      { path: 'news/newsroom', component: NewsIndexComponent },
      { path: 'news/publication', component: PublicationComponent },
      { path: 'news/research', component: ResearchComponent },

  { path: 'membership', component: MembershipComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-nocode', component: RegisterNocodeComponent },
  { path: 'person', component: PersonComponent },

      { path: 'person/verify-email', component: VerifyEmailComponent },
      { path: 'person/reset-pwd/:username', component: ResetPwdComponent },

  { path: 'login', component: LoginComponent },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule],
  providers: [NavigateService, UserService, HttpClientService, AppConfigService],
})

export class AppRoutingModule {}
