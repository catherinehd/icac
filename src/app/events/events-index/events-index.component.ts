import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { EventsService } from '../../service/events.service';
import { newsModel } from '../../model/news.model';
declare var $:any;
@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class EventsIndexComponent implements OnInit {

  hasNews: boolean;
  showLists: any;
  page: any = {pageIndex: 1, pageCount: 1};  //获取当前页和总页数
  same: boolean;//如果会议开始和结束是同一天，same为true，否则为false

  constructor(private navigateService: NavigateService,
              private eventService: EventsService ) {
    this.hasNews = true;
  }

  ngOnInit() {
    //默认查询全国第一页数据
    this.eventService.getEventes(0,1).subscribe(res => {
     this.showList(res), err => {
      if (err && err.status === 401) this.navigateService.pushToRoute('/home');
     }
    });
    setTimeout(function(){
      $('.wrap-box').css("min-height",$(window).height());
    },0);
    //this.setFooter();
  }

  setFooter() {
    if($('body').height() < $(window).height()){
      $('footer').css({"position":"fixed","bottom":"0"});
    } else {
      $('footer').css({"position":"relative","bottom":"auto"});
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

  showList(list) {
    this.showLists = list.rows;
    for(let i = 0;i < this.showLists.length; i++){
      let t1 = this.showLists[i].newsMeetstarttime;
      let t2 = this.showLists[i].newsMeetstoptime;
      this.showLists[i].newsMeetstarttime = this.format(t1);
      this.showLists[i].newsMeetstoptime = this.format(t2);
      if(this.showLists[i].newsMeetstarttime === this.showLists[i].newsMeetstoptime) {
        this.same = true;
      } else {
        this.same = false;
      }
    }
    this.page.pageCount = list.total;
    if(list.rows.length > 0) {
      this.hasNews = true;
    } else {
      this.hasNews = false;
    }
  }

  format(t) {
    let unixTimestamp = new Date(t);
    let mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let commonTime = mon[unixTimestamp.getMonth()] + ' ' + unixTimestamp.getDate() + ', ' + unixTimestamp.getFullYear();
    return commonTime;
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  onShowPage(page) {
    this.page.pageIndex = page;

    this.eventService.getEventes(0,page).subscribe(res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });

  }

}
