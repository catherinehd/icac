import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { ProDevService } from '../../service/pro-dev.service';

@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class ProDetailComponent implements OnInit {

  news: newsModel = new newsModel(0,'', 0,'','','','','','','','');

  constructor(
    private navigateService: NavigateService,
    private prodevService: ProDevService
  ) { }

  ngOnInit() {
    this.getId();
  }

  getId() {
    //获取id
    const id = Number(location.hash.split('/')[3]);
    //根据id获取页面内容
    this.prodevService.getProDevDetail(id).subscribe(res => {
    this.news = res.data, err => {
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
