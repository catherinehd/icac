import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schooldetail',
  templateUrl: './schooldetail.component.html',
  styleUrls: ['./schooldetail.component.styl']
})
export class SchooldetailComponent implements OnInit {

  showOverview: boolean;
  showGuideance: boolean;

  constructor() {
    this.showOverview = true;
    this.showGuideance = false;
  }

  ngOnInit() {
  }

}
