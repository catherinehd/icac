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
    this.news = {
      createTime:'1',
      updateTime:'August 24, 2017',
      newsId:1,
      newsTheme:'WHAT TO EXPECT THIS YEAR AT',
      newsTime:'1',
      state:0,
      createBy:'1',
      updateBy:'1',
      newsPlace:'马萨诸塞州',
      newsPerson:'Joshua, Harry, Charlie, Daniel, liam,Harry, Charlie, Daniel, William,Daniel, liam,Harry, Charlie, Daniel, William.',
      newsImage:'../../../assets/img/detail.png',
      newsInfo:'ChinaICAC is committed to developing the professionalism of all school based counselors in China by providing a wealth of networking and learning opportunities including but not limited to webinars, workshops, and conferences.  ChinaICAC also effectively bring together high school counselors serving Chinese nationals and college admission officers.ChinaICAC is committed to developing the professionalism of all school based counselors in China by providing a wealth of networking and learning opportunities including but not limited to webinars, workshops, and conferences.  ChinaICAC also effectively bring together high school counselors serving Chinese nationals and college admission officers.ChinaICAC is committed to developing the professionalism of all school based counselors in China by providing a wealth of networking and learning opportunities including but not limited to webinars, workshops, and conferences.  ChinaICAC also effectively bring together high school counselors serving Chinese nationals and college admission officers.ChinaICAC is committed to developing the professionalism of all school based counselors in China by providing a wealth of networking and learning opportunities including but not limited to webinars, workshops, and conferences.  ChinaICAC also effectively bring together high school counselors serving Chinese nationals and college admission officers.',
      newsTitle:'Countdown to Cleveland!  WHAT TO EXPECT THIS YEAR AT',
      newsRole: 0
    }
  }

  getId() {
    //获取id
    const id = Number(location.pathname.split('/')[4]);
    //根据id获取页面内容
    //this.eventService.getNationalDetailEventes(id).subscribe(res => {
    //this.news = res, err => {
    //if (err && err.status === 401) this.navigateService.pushToRoute('/home');
    //}
    //});
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
