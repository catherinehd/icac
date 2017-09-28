import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ShareModule } from './share/share.module';

import { AppComponent } from './app.component';

import { AboutIndexComponent } from './about/about-index/about-index.component';


@NgModule({
  imports: [
    BrowserModule, HomeModule, AppRoutingModule, ShareModule,
  ],
  declarations: [
    AppComponent, AboutIndexComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
