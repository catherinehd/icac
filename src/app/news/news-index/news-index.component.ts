import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { NewsService } from '../../service/news.service';
declare var $:any;
@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class NewsIndexComponent implements OnInit {

  hasNews: boolean;
  showLists: any;
  page: any = {pageIndex: 1, pageCount: 1};  //获取当前页和总页数

  constructor(private navigateService: NavigateService,
              private newsService: NewsService) {
    this.hasNews = true;
  }

  ngOnInit() {
    this.newsService.getNewsList(0,1).subscribe( res => {
      this.showList(res) , err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    })
    setTimeout(function(){
      $('.wrap-box').css("min-height",$(window).height());
    },0);
  }

  setFooter(n) {
    console.log('1');
    console.log($('body').height());
    console.log($(window).height());
    if(($('body').height() + 258*n) < $(window).height()){
      $('footer').css({"position":"fixed","bottom":"0"});
    } else {
      $('footer').css({"position":"relative","bottom":"auto"});
    }

    window.onload = function() {
      console.log('1');
      console.log($('body').height());
      console.log($(window).height());
      if($('body').height() < $(window).height()){
        $('footer').css({"position":"fixed","bottom":"0"});
      } else {
        $('footer').css({"position":"relative","bottom":"auto"});
      }
    }

    window.onresize = function() {
      console.log('1');
      console.log($('body').height());
      console.log($(window).height());
      if(($('body').height() + 258*n) < $(window).height()){
        $('footer').css({"position":"fixed","bottom":"0"});
      } else {
        $('footer').css({"position":"relative","bottom":"auto"});
      }
    }
  }

  showList(list) {
    this.showLists = list.rows;
    for(let i = 0;i < this.showLists.length; i++){
      let t = this.showLists[i].ncTime;
      this.showLists[i].ncTime = this.format(t);
     this.showLists[i].ncContent = this.showLists[i].ncContent.replace(/<.*?>/ig,"");
      this.showLists[i].ncContent = this.showLists[i].ncContent.replace(/&nbsp;/ig,'');
    };
    this.page.pageCount = list.total;
    if(list.rows.length > 0) {
      this.hasNews = true;
    } else {
      this.hasNews = false;
    };
    //this.setFooter(this.showLists.length);
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

    this.newsService.getNewsList(0,page).subscribe(res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });

  }

}
