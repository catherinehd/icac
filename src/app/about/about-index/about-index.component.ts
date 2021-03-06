import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
declare var $:any;
@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.styl','../../share/breadcrumb/breadcrumb.component.styl']
})
export class AboutIndexComponent implements OnInit {

  isshow1: boolean;
  isshow2: boolean;
  isshow3: boolean;
  isshow4: boolean;
  top: any;

  constructor(private navigateService: NavigateService) {
    this.isshow1 = true;
    this.isshow2 = false;
    this.isshow3 = false;
    this.isshow4 = false;
  }

  ngOnInit() {
    const search = location.hash.split('/')[2];
    this.about(search);
    let that = this;
    // document.getElementsByTagName('body')[0].onscroll = function(){
    //   that.setbar();
    //   //that.top = document.documentElement.scrollTop ||window.pageYOffset || document.body.scrollTop || 0;
    //  console.log('scroll');
    // };
    window.onscroll = function(){
      that.setbar();
    }
    setTimeout(function(){
      $('.wrap-box').css("min-height",$(window).height());
    },0);
   // this.setbar();
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

  setbar() {
     const top =  document.documentElement.scrollTop ||window.pageYOffset || document.body.scrollTop || 0;
    //console.log(top);
    if(top <= 230 ) {
      if(document.getElementById('nav-right')) {
        document.getElementById('nav-right').style.top = '0px';
      }
    } else {
      if(document.getElementById('nav-right')) {
        document.getElementById('nav-right').style.top = (top-230).toString() + 'px';
      }
    }
  }

  go(url,title) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url)
  }

  about(msg) {
    switch (msg)
    {
      case 'overview':
        this.isshow1 = true;
        this.isshow2 = false;
        this.isshow3 = false;
        this.isshow4 = false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.setbar();
       // this.navigateService.pushToRoute('./aboutChinaIcac/overview');
        break;
      case 'committee':
        this.isshow1 = false;
        this.isshow2 = true;
        this.isshow3 = false;
        this.isshow4 = false;
        document.body.scrollTop = document.getElementById('overview').clientHeight + 230;
        document.documentElement.scrollTop = document.getElementById('overview').clientHeight + 230;
        this.setbar();
       // this.navigateService.pushToRoute('./aboutChinaIcac/committee');
        break;
      case 'advisor':
        this.isshow1 = false;
        this.isshow2 = false;
        this.isshow3 = true;
        this.isshow4 = false;
        document.body.scrollTop = document.getElementById('committee').clientHeight + document.getElementById('overview').clientHeight + 230;
        document.documentElement.scrollTop = document.getElementById('committee').clientHeight + document.getElementById('overview').clientHeight + 230;
        this.setbar();
      //  this.navigateService.pushToRoute('./aboutChinaIcac/advisor');
        break;
      case 'contact-us':
        this.isshow1 = false;
        this.isshow2 = false;
        this.isshow3 = false;
        this.isshow4 = true;
        document.body.scrollTop = document.getElementById('advisor').clientHeight + document.getElementById('committee').clientHeight + document.getElementById('overview').clientHeight + 230;
        document.documentElement.scrollTop = document.getElementById('advisor').clientHeight + document.getElementById('committee').clientHeight + document.getElementById('overview').clientHeight + 230;
        this.setbar();
      //  this.navigateService.pushToRoute('./aboutChinaIcac/contact-us');
        break;
      default:
        break;
    }
  }


}
