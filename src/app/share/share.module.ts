import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    FooterComponent, HeaderComponent, NavbarComponent, BreadcrumbComponent, PagenotfoundComponent, ModalComponent,
  ],
  exports: [
    FooterComponent, HeaderComponent, NavbarComponent, BreadcrumbComponent, ModalComponent,
  ]
})

export class ShareModule { }
