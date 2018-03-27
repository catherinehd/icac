import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { PersonService } from '../../service/person.service';
import { EventsService } from '../../service/events.service';
import { HttpClientService } from '../../service/http-client.service';
import { UserStoreService } from '../../service/user-store.service';
declare var $:any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class DetailComponent implements OnInit {
  news: newsModel = new newsModel('','', 0,'','',0,'','','','','','','',0);
  hadlogin: boolean;
  modal1 = {
    title: 'Please check your registration information',
    isRegisterShow: false,
    closeShow: false,
  };
  modal2 = {
    title: 'CHINAICAC MEMBER SIGN IN',
    isSigninShow: false,
    closeShow: false,
  };
  modal2Show: boolean; //登录框是否显示

  constructor(private navigateService: NavigateService,
              private userService: UserService,
              private personService: PersonService,
              private eventService: EventsService,
              private httpClientService: HttpClientService,
              private userStoreService: UserStoreService,
              ) {
  this.hadlogin = false;
  }

  ngOnInit() {
    this.getId();
    this.setFooter();
  }

  setFooter() {
    if($('body').height() < $(window).height()){
      $('footer').css({"position":"fixed","bottom":"0"});
    }

    window.onload = function() {
      if($('body').height() < $(window).height()){
        $('footer').css({"position":"fixed","bottom":"0"});
      } else {
        $('footer').css({"position":"relative","bottom":"auto"});
      }
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
    const id = Number(location.hash.split('/')[4]);
    //根据id获取页面内容
    this.eventService.getDetailEventes(id).subscribe(res => {
      this.news = res.data;
      this.news.newsInfo = this.news.newsInfo.replace(/<.*?>/ig, '');
      this.news.newsTime = this.format(this.news.newsTime);
    });
  }

  format(t) {
    let unixTimestamp = new Date(t);
    let mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let commonTime = mon[unixTimestamp.getMonth()] + ' ' + unixTimestamp.getDate() + ', ' + unixTimestamp.getFullYear();
    return commonTime;
  }

  //注册会议
  register() {
    // 判断是否登录
    this.personService.getUserInfo().subscribe( res => {
      if(res.ok) {
        // 已经登录还需要判断是否已经报名
        this.modal1.isRegisterShow = true;
      } else {
        // 没有登录，显示登录框
        this.modal2Show = true;
        this.modal2.isSigninShow = true;
      }
    })
  }

  onConfirm1() {
    this.modal1.isRegisterShow = false;
  }

  onConfirm2() {
    this.modal2.isSigninShow = false;
  }

}

class newsModel {
  constructor(public createTime: string,
              public updateTime: string,
              public newsId: number,
              public newsTheme: string,
              public newsTime: string,
              public state: number,
              public createBy: string,
              public updateBy: string,
              public newsPlace: string,
              public newsPerson: string,
              public newsImage: string,
              public newsInfo: string,
              public newsTitle: string,
              public newsRole: number) {}
}
