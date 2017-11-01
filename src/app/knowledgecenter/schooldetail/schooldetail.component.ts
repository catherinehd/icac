import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { HomeService } from '../../service/center.service';

import { schoolModel } from '../../model/school.model';

declare var $:any;

@Component({
  selector: 'app-schooldetail',
  templateUrl: './schooldetail.component.html',
  styleUrls: ['./schooldetail.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class SchooldetailComponent implements OnInit {

  showOverview: boolean;
  showRequirements: boolean;
  showOfficer: boolean;

  school: schoolModel = new schoolModel;

  constructor(private homeServicde: HomeService,
              private navigateService: NavigateService) {
    this.showOverview = true;
    this.showRequirements = false;
    this.showOfficer =false;
  }

  ngOnInit() {
    this.getId();
    this.setFooter();
  }

  setFooter() {
    if($('body').height() < $(window).height()){
      $('footer').css({"position":"fixed","bottom":"0"});
    }

    window.onresize = function() {
      if($('body').height() < $(window).height()){
        $('footer').css({"position":"fixed","bottom":"0"});
      } else {
        $('footer').css({"position":"relative","bottom":"auto"});
      }
    }
  }

  getId() {
    //获取id
    const id = Number(location.hash.split('/')[3]);
    //根据id获取页面内容
    this.homeServicde.getUniversityDetailList(id).subscribe(res => {
      this.show(res.data), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });
  }

  show(data) {
    this.school = data;
    //console.log(this.school)
  }

}

