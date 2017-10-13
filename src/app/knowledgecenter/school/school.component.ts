import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

import { schoolModel } from '../../model/school.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.styl']
})
export class SchoolComponent implements OnInit {

  isempty: boolean;
  schoolInfo: schoolModel;

  constructor(private navigateService: NavigateService) {
    this.isempty = false;

  }

  ngOnInit() {

    //获取大学学校列表list

  }

  gopage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  search() {
    console.log('search school')
    //获取搜索学校列表到list,如果为空,isempty=true.若不为空,isempty=false.
  }

}
