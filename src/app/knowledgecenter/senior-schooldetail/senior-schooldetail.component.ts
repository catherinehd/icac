import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { HomeService } from '../../service/center.service';

@Component({
  selector: 'app-senior-schooldetail',
  templateUrl: './senior-schooldetail.component.html',
  styleUrls: ['./senior-schooldetail.component.styl']
})
export class SeniorSchooldetailComponent implements OnInit {

  showOverview: boolean;
  showGuideance: boolean;

  school: any;

  constructor(private homeServicde: HomeService,
              private navigateService: NavigateService) {
    this.showOverview = true;
    this.showGuideance = false;
  }

  ngOnInit() {
    this.getId();
  }

  getId() {
    //获取id
    const id = Number(location.pathname.split('/')[3]);
    //根据id获取页面内容
    this.homeServicde.getUniversityDetailList(id).subscribe(res => {
      this.school = res.data, err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });
  }

}
