import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { HomeService } from '../../service/center.service'
import { PersonService } from '../../service/person.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { schoolModel } from '../../model/school.model';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-senior-school',
  templateUrl: './senior-school.component.html',
  styleUrls: ['./senior-school.component.styl','../school/school.component.styl']
})
export class SeniorSchoolComponent implements OnInit {
  user: UserModel = new UserModel();
  searchForm: FormGroup;
  search: SearchModel = new SearchModel('');
  isempty: boolean;
  showLists: any;
  page: any = {pageIndex: 1, pageCount:1};  //获取当前页和总页数

  constructor(private navigateService: NavigateService,
              private formBuilder: FormBuilder,
              private personService: PersonService,
              private centerService: HomeService) {
    this.isempty = false;
  }

  ngOnInit() {
    this.personService.getUserInfo().subscribe(res =>{
        res.ok ? this.user = res.data : this.navigateService.pushToRoute('./login');
      }
    );

    //获取中学学校列表list
    //默认查询第一页数据
    this.centerService.getMiddleSchoolList(1).subscribe(res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });

    this.buildForm();
  }

  showList(list) {
    console.log(typeof(list.total));   //search的时候返回了总条数,设置相应的pagecount.
    this.showLists = list.rows;
    this.page.pageCount = list.total;
    console.log(this.page.pageCount);
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
    console.log('search school')
    //获取搜索学校列表到list,如果为空,isempty=true.若不为空,isempty=false.
    this.centerService.search('1',1).subscribe( res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });


  }

}

class SearchModel {
  constructor(public msg: string,) {}
}
