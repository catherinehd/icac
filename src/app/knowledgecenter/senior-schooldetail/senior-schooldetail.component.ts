import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { HomeService } from '../../service/center.service';

import { middleSchoolModel } from '../../model/middleSchool.model';
declare var $:any;

@Component({
  selector: 'app-senior-schooldetail',
  templateUrl: './senior-schooldetail.component.html',
  styleUrls: ['./senior-schooldetail.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class SeniorSchooldetailComponent implements OnInit {

  showOverview: boolean;
  showGuideance: boolean;

  school: middleSchoolModel = new middleSchoolModel;

  constructor(private homeServicde: HomeService,
              private navigateService: NavigateService) {
    this.showOverview = true;
    this.showGuideance = false;
  }

  ngOnInit() {
    this.getId();
    setTimeout(function(){
      $('.wrap-box').css("min-height",$(window).height());
    },0);
  }

  getId() {
    //获取id
    const id = Number(location.hash.split('/')[3]);
    //根据id获取页面内容
    this.homeServicde.getMiddleSchoolDetailList(id).subscribe(res => {
      this.school = res.data;console.log(this.school), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });
  }

}
