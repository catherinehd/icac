import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.styl']
})
export class BreadcrumbComponent implements OnInit {

  path:string[] = [];

  constructor() { }

  ngOnInit() {
    this.path = location.pathname.split('/').slice(1);
  }

}
