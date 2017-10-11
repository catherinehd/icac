import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.styl']
})
export class MembershipComponent implements OnInit {

  isshow1: boolean;
  isshow2: boolean;

  constructor() {
    this.isshow1 = true;
    this.isshow2 = false;
  }

  ngOnInit() {
  }

}
