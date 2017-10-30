import { Component, OnInit } from '@angular/core';

import { AppConfigService } from '../../service/app-config.service';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class MembershipComponent implements OnInit {

  modal = {
    title: 'ChinaICAC Member Sign in',
    isSigninShow: false,
    closeShow: true,
  };

  isshow1: boolean;
  isshow2: boolean;

  constructor(private personService: PersonService,
              private appconfigService: AppConfigService,) {
    this.isshow1 = true;
    this.isshow2 = false;
  }

  ngOnInit() {
    document.body.onscroll = function(){
      const top = document.body.scrollTop;
      if(top <= 230 ) {
        if(document.getElementById('nav-right')){
          document.getElementById('nav-right').style.top = '0px';
        }
      } else {
        if(document.getElementById('nav-right')){
          document.getElementById('nav-right').style.top = (top-230).toString() + 'px';
        }
      }
    }
  }

  show(msg) {
    switch (msg)
    {
      case 'membership':
        this.isshow1 = true;
        this.isshow2 = false;
        document.body.scrollTop = 0;
        break;
      case 'benefit':
        this.isshow1 = false;
        this.isshow2 = true;
        document.body.scrollTop = 1050;
        break;
      default:
        break;
    }
  }

  onConfirm() {
    this.modal.isSigninShow = false;
  }

  download(url){
    this.personService.getUserInfo().subscribe(res => {
      res.ok ? this.candownload(res.data) : this.modal.isSigninShow = true;
    });
  }

  candownload(data) {
    this.modal.isSigninShow = false;
    if(data.userRole = 0) {
      window.open(this.appconfigService.api +' //user/excel/0',"_blank");
    } else {
      window.open(this.appconfigService.api + '//user/excel/1',"_blank");
    }
  }

}
