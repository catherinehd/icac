import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { EventsService } from '../../service/events.service';
import { newsModel } from '../../model/news.model';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.styl']
})
export class EventsIndexComponent implements OnInit {

  hasConference: boolean;
  showLists: any;

  constructor(private navigateService: NavigateService,
              private eventService: EventsService ) {
    this.hasConference = true;
  }

  ngOnInit() {
    //this.eventService.getWorkshopEventes(0,1).subscribe(res => {
    // this.showList(res), err => {
    //  if (err && err.status === 401) this.navigateService.pushToRoute('/home');
     //}
    //});

    const array = [
      {
        id:1,
        theme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismodndum laoreet. Proin gravida dolor sit amet lacus accumsan et viverrajametaccumsan et viverra justo commoerrajametaccumsanerrajametaccumsando...',
        time:'a',
        state: 1,
        cre_by:'a',
        cre_time:'a',
        up_by:'a',
        up_time:'August 24, 2017',
        place:'a',
        person:'a',
        image:'../../../assets/img/events.png',
        info:'a',
        title:'HTC is considering including a cluding a spin-off of   is considering a cluding a spin-off ofincluding...'
      },
      {
        id:2,
        theme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismodndum laoreet. Proin gravida dolor sit amet lacus accumsan et viverrajametaccumsan et viverra justo commoerrajametaccumsanerrajametaccumsando...',
        time:'a',
        state: 1,
        cre_by:'a',
        cre_time:'a',
        up_by:'a',
        up_time:'August 24, 2017',
        place:'a',
        person:'a',
        image:'../../../assets/img/events.png',
        info:'a',
        title:'HTC is considering including a cluding a spin-off of   is considering a cluding a spin-off ofincluding...'
      },
      {
        id:3,
        theme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismodndum laoreet. Proin gravida dolor sit amet lacus accumsan et viverrajametaccumsan et viverra justo commoerrajametaccumsanerrajametaccumsando...',
        time:'a',
        state: 1,
        cre_by:'a',
        cre_time:'a',
        up_by:'a',
        up_time:'August 24, 2017',
        place:'a',
        person:'a',
        image:'../../../assets/img/events.png',
        info:'a',
        title:'HTC is considering including a cluding a spin-off of   is considering a cluding a spin-off ofincluding...'
      },
    ];
    this.showList(array);
  }

  showList(list) {
    this.showLists = list;
    if(list.length > 0) {
      this.hasConference = true;
    } else {
      this.hasConference = false;
    }

  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }


}
