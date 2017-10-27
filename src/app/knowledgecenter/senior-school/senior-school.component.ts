import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigateService } from '../../service/navigate.service';
import { HomeService } from '../../service/center.service'
import { PersonService } from '../../service/person.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { schoolModel } from '../../model/school.model';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-senior-school',
  templateUrl: './senior-school.component.html',
  styleUrls: ['./senior-school.component.styl','../school/school.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class SeniorSchoolComponent implements OnInit {
  modal = {
    title: 'CHINAICAC MEMBER SIGN IN',
    isSigninShow: false,
  };

  user: UserModel = new UserModel();
  searchForm: FormGroup;
  search: SearchModel = new SearchModel('');
  isempty: boolean;
  showLists: any;
  page: any = {pageIndex: 1, pageCount:1};  //获取当前页和总页数

  constructor(private navigateService: NavigateService,
              private formBuilder: FormBuilder,
              private personService: PersonService,
              private route: ActivatedRoute,
              private centerService: HomeService) {
    this.isempty = false;
  }

  ngOnInit() {
    this.personService.getUserInfo().subscribe(res => {
      res.ok ?  this.getLists() : this.modal.isSigninShow = true ;
    });
    this.buildForm();
  }

  getLists() {
    this.modal.isSigninShow = false;
    //查询第一页数据列表
    this.centerService.getMiddleSchoolList(1).subscribe(res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });
  }

  showList(list) {
    //console.log(typeof(list.total));   //search的时候返回了总条数,设置相应的pagecount.
    this.showLists = list.rows;
    this.page.pageCount = list.total;
    //console.log(this.page.pageCount);
    if(list.rows.length > 0) {
      this.isempty = false;
    } else {
      this.isempty = true;
    }

  }

  buildForm(){
    this.searchForm = this.formBuilder.group({
      'msg': [this.search.msg, [
        Validators.required,
      ]]
    });
  }

  gopage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  onShowPage(page) {
    this.page.pageIndex = page;

    this.centerService.getMiddleSchoolList(page).subscribe(res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });
  }


  searchSchool() {
    if(this.searchForm.value.msg) {
      this.navigateService.pushToRoute('./knowledge-center/high-schooll/search/', this.searchForm.value.msg);
    } else {
      this.getList();
    }
  }

  getList(){
    this.navigateService.pushToRoute('./knowledge-center/high-school');
  }

  onConfirm() {
    this.navigateService.pushToRoute('./home');
  }


}

class SearchModel {
  constructor(public msg: string,) {}
}
