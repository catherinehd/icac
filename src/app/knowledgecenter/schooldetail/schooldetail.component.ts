import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { HomeService } from '../../service/center.service';

import { schoolModel } from '../../model/school.model';

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
  }

  getId() {
    //获取id
    const id = Number(location.pathname.split('/')[3]);
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

