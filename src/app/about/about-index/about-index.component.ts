import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

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

  constructor(private navigateService: NavigateService) {
    this.isshow1 = true;
    this.isshow2 = false;
    this.isshow3 = false;
    this.isshow4 = false;
  }

  ngOnInit() {
    const search = location.hash.split('/')[2];
    this.about(search);
    document.body.onscroll = function(){
      const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
      console.log(top);
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
        this.navigateService.pushToRoute('./aboutChinaIcac/overview');
        break;
      case 'committee':
        this.isshow1 = false;
        this.isshow2 = true;
        this.isshow3 = false;
        this.isshow4 = false;
        document.body.scrollTop = 675;
        this.navigateService.pushToRoute('./aboutChinaIcac/committee');
        break;
      case 'advisor':
        this.isshow1 = false;
        this.isshow2 = false;
        this.isshow3 = true;
        this.isshow4 = false;
        document.body.scrollTop = 1830;
        this.navigateService.pushToRoute('./aboutChinaIcac/advisor');
        break;
      case 'contact-us':
        this.isshow1 = false;
        this.isshow2 = false;
        this.isshow3 = false;
        this.isshow4 = true;
        document.body.scrollTop = 2170;
        this.navigateService.pushToRoute('./aboutChinaIcac/contact-us');
        break;
      default:
        break;
    }
  }


}
