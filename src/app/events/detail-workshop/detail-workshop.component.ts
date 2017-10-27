import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { EventsService } from '../../service/events.service';

@Component({
  selector: 'app-detail-workshop',
  templateUrl: './detail-workshop.component.html',
  styleUrls: ['./detail-workshop.component.styl','../detail/detail.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class DetailWorkshopComponent implements OnInit {
  news: newsModel = new newsModel('','', 0,'','',0,'','','','','','','',0);

  constructor(private eventService: EventsService,
              private navigateService: NavigateService,) { }

  ngOnInit() {
    this.getId();
  }

  getId() {
    //获取id
    const id = Number(location.hash.split('/')[3]);
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
