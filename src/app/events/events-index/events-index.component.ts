import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.styl']
})
export class EventsIndexComponent implements OnInit {

  hasConference: boolean;

  constructor(private navigateService: NavigateService) {
    this.hasConference = true;
  }

  ngOnInit() {
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }


}
