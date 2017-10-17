import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { ProDevService } from '../../service/pro-dev.service';

@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.styl']
})
export class ProDetailComponent implements OnInit {

  news: newsModel = new newsModel(0,'', 0,'','','','','','','','');

  constructor(
    private navigateService: NavigateService,
    private prodevService: ProDevService
  ) { }

  ngOnInit() {
    this.getId();
    this.news = {
      wsId:1,
      wsTime: 'August 24, 2017',
      state: 0,
      createBy: '',
      createTime: '',
      updateBy: '',
      updateTime: '',
      wsUrl: 'http://www.findunet.com',
      wsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo...',
      wsTitle:'HTC is considering including a spin-off of VR and overall salesHTC ...',
      wsDurl:'http://www.findunet.com',
    }
  }

  getId() {
    //获取id
    const id = Number(location.pathname.split('/')[3]);
    //根据id获取页面内容
    this.prodevService.getProDevDetail(id).subscribe(res => {
    this.news = res, err => {
    if (err && err.status === 401) this.navigateService.pushToRoute('/home');
    }
    });
  }

}

class newsModel {
  constructor(public wsId: number,
              public wsTime: string,
              public state: number,
              public createBy: string,
              public createTime: string,
              public updateBy: string,
              public updateTime: string,
              public wsUrl: string,
              public wsContent: string,
              public wsTitle: string,
              public wsDurl: string) {}
}
