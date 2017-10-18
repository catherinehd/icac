import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { PersonService } from '../../service/person.service';
import { EventsService } from '../../service/events.service';
import { HttpClientService } from '../../service/http-client.service';
import { UserStoreService } from '../../service/user-store.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.styl']
})
export class DetailComponent implements OnInit {
  news: newsModel = new newsModel('','', 0,'','',0,'','','','','','','',0);

  constructor(private navigateService: NavigateService,
              private userService: UserService,
              private personService: PersonService,
              private eventService: EventsService,
              private httpClientService: HttpClientService,
              private userStoreService: UserStoreService,
              ) {

  }

  ngOnInit() {
    this.getId();
  }

  getId() {
    //获取id
    const id = Number(location.pathname.split('/')[4]);
    //根据id获取页面内容
    this.eventService.getDetailEventes(id).subscribe(res => {
      this.news = res.data, err => {
    if (err && err.status === 401) this.navigateService.pushToRoute('/home');
    }
    });
  }
}

class newsModel {
  constructor(public createTime: string,
              public updateTime: string,
              public newsId: number,
              public newsTheme: string,
              public newsTime: string,
              public state: number,
              public createBy: string,
              public updateBy: string,
              public newsPlace: string,
              public newsPerson: string,
              public newsImage: string,
              public newsInfo: string,
              public newsTitle: string,
              public newsRole: number) {}
}
