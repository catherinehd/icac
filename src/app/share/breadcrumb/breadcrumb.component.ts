import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.styl']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(location)
  }

}
