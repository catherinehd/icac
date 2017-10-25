import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { ProDevService } from '../../service/pro-dev.service';
import { PersonService } from '../../service/person.service';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-pro-dev-index',
  templateUrl: './pro-dev-index.component.html',
  styleUrls: ['./pro-dev-index.component.styl']
})
export class ProDevIndexComponent implements OnInit {
  modal = {
    title: 'ChinaICAC Member Sign in',
    isSigninShow: false,
    closeShow: false,
  }

  hasWebinar: boolean;
  showLists: any;
  page: any = {pageIndex: 1, pageCount: 1};  //获取当前页和总页数

  constructor(private navigateService: NavigateService,
              private personService: PersonService,
              private prodevService: ProDevService) {
    this.hasWebinar = true;
  }

  ngOnInit() {
    this.personService.getUserInfo().subscribe(res => {
      res.ok ?  this.getList() : this.modal.isSigninShow = true ;
    })
  }

  getList() {
    this.modal.isSigninShow = false;
    //查询第一页数据列表
    this.prodevService.getProDev(1).subscribe(res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });
  }

  showList(data) {
    this.showLists = data.rows;
    this.page.pageCount = data.total;
    if(data.rows.length > 0) {
      this.hasWebinar = true;
    } else {
      this.hasWebinar = false;
    }
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  onShowPage(page) {
    this.page.pageIndex = page;

    this.prodevService.getProDev(page).subscribe(res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });

  }

}
