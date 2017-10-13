import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-pro-dev-index',
  templateUrl: './pro-dev-index.component.html',
  styleUrls: ['./pro-dev-index.component.styl']
})
export class ProDevIndexComponent implements OnInit {

  hasWebinar: boolean;

  constructor(private navigateService: NavigateService) {
    this.hasWebinar = true;
  }

  ngOnInit() {
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }


}
