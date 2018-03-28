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
  news: newsModel = new newsModel('','', 0,'','','','',0,'','','','','','','',0);
  conferenceState: boolean;//是否报名会议 true的时候为可以报名
  modal1 = {
    title: 'Please check your registration information',
    isRegisterShow: false,
    closeShow: false,
    fName: '',
    lName: '',
    email: '',
    school: '',
    theme: ''
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
      this.news = res.data.news;
      this.modal1.theme = res.data.news.newsTheme;
      this.conferenceState = res.data.state;
      this.news.newsInfo = this.news.newsInfo.replace(/<.*?>/ig, '');
      this.news.newsMeetstarttime = this.format(this.news.newsMeetstarttime);
      this.news.newsMeetstoptime = this.format(this.news.newsMeetstoptime);
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
      if(res.ok && this.conferenceState) {
        // 已经登录并且已经报名
          this.modal1.isRegisterShow = true;
          this.modal1.fName = res.data.userInfo.userFn;
          this.modal1.lName = res.data.userInfo.userLn;
          this.modal1.email = res.data.userName;
          this.modal1.school = res.data.userInfo.userSchool;
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
              public newsMeetstarttime: string,
              public newsMeetstoptime: string,
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
