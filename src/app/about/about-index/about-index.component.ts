import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.styl']
})
export class AboutIndexComponent implements OnInit {

  isshow1: boolean;
  isshow2: boolean;
  isshow3: boolean;
  isshow4: boolean;


  constructor() {
    this.isshow1 = true;
    this.isshow2 = false;
    this.isshow3 = false;
    this.isshow4 = false;
  }

  ngOnInit() {
  }

}
