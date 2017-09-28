import  { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    FooterComponent, HeaderComponent, NavbarComponent, BreadcrumbComponent,
  ],
  exports: [
    FooterComponent, HeaderComponent, NavbarComponent, BreadcrumbComponent,
  ]
})

export class ShareModule { }
