import { Component, OnInit, AfterViewChecked,  } from '@angular/core';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.styl']
})
export class ToTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toTop() {
    document.body.scrollTop = 0;
  }

}
