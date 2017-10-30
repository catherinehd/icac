import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { EventsService } from '../../service/events.service';
import { newsModel } from '../../model/news.model';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class EventsIndexComponent implements OnInit {

  hasConference: boolean;
  showLists: any;
  page: any = {pageIndex: 1, pageCount: 1};  //获取当前页和总页数

  constructor(private navigateService: NavigateService,
              private eventService: EventsService ) {
    this.hasConference = true;
  }

  ngOnInit() {
    //默认查询全国第一页数据
    this.eventService.getEventes(0,1).subscribe(res => {
     this.showList(res), err => {
      if (err && err.status === 401) this.navigateService.pushToRoute('/home');
     }
    });

  }

  showList(list) {
    this.showLists = list.rows;
    for(let i = 0;i <= this.showLists.length; i++){
      let t = this.showLists[i].newsTime;
      this.showLists[i].newsTime = this.format(t);
    }
    this.page.pageCount = list.total;
    if(list.rows.length > 0) {
      this.hasConference = true;
    } else {
      this.hasConference = false;
    }
  }

  format(t) {
    let unixTimestamp = new Date(t);
    let commonTime = unixTimestamp.toLocaleDateString();
    return commonTime;
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  onShowPage(page) {
    this.page.pageIndex = page;

    this.eventService.getEventes(0,page).subscribe(res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });

  }

}
