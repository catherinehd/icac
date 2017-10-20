import  { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ModalComponent } from './modal/modal.component';
import { PagerComponent } from './pager/pager.component';
import { PopComponent } from './pop/pop.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule  ],
  declarations: [
    FooterComponent, HeaderComponent, NavbarComponent, BreadcrumbComponent, PagenotfoundComponent, ModalComponent, PagerComponent, PopComponent,
  ],
  exports: [
    FooterComponent, HeaderComponent, NavbarComponent, BreadcrumbComponent, PagenotfoundComponent, ModalComponent, PagerComponent, PopComponent,
  ]
})

export class ShareModule { }
