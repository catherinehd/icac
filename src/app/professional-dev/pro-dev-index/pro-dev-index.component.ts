import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-dev-index',
  templateUrl: './pro-dev-index.component.html',
  styleUrls: ['./pro-dev-index.component.styl']
})
export class ProDevIndexComponent implements OnInit {

  hasWebinar: boolean;

  constructor() {
    this.hasWebinar = true;
  }

  ngOnInit() {
  }

}
