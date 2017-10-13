import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schooldetail',
  templateUrl: './schooldetail.component.html',
  styleUrls: ['./schooldetail.component.styl']
})
export class SchooldetailComponent implements OnInit {

  showOverview: boolean;
  showRequirements: boolean;
  showOfficer: boolean;

  constructor() {
    this.showOverview = true;
    this.showRequirements = false;
    this.showOfficer =false;
  }

  ngOnInit() {
  }

}
