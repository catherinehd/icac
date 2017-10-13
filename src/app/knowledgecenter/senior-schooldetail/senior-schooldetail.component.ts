import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senior-schooldetail',
  templateUrl: './senior-schooldetail.component.html',
  styleUrls: ['./senior-schooldetail.component.styl']
})
export class SeniorSchooldetailComponent implements OnInit {

  showOverview: boolean;
  showGuideance: boolean;

  constructor() {
    this.showOverview = true;
    this.showGuideance = false;
  }

  ngOnInit() {
  }

}
