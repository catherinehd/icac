import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-events-workshop',
  templateUrl: './events-workshop.component.html',
  styleUrls: ['./events-workshop.component.styl','../events-index/events-index.component.styl']
})
export class EventsWorkshopComponent implements OnInit {

  hasConference: boolean;

  constructor(private navigateService: NavigateService) { }

  ngOnInit() {
    this.hasConference = true;
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }


}
