import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShareModule } from '../share/share.module';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { BannerComponent } from './banner/banner.component';

import { HomeService } from '../service/home.service';
import { UserStoreService } from '../service/user-store.service';
import { NavigateService } from '../service/navigate.service';
import { ThemableBrowserService } from '../service/themeable-browser.service';

@NgModule({
  imports: [
    ShareModule, HomeRoutingModule, BrowserModule
  ],
  declarations: [
    IndexComponent,
    BannerComponent
  ],
  providers: [
    HomeService, UserStoreService, NavigateService, ThemableBrowserService
  ],
})
export class HomeModule { }
