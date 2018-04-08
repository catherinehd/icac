import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeService } from '../../service/home.service';
import { UserStoreService } from '../../service/user-store.service';
import { NavigateService } from '../../service/navigate.service';
import { ThemableBrowserService } from '../../service/themeable-browser.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.styl']
})
export class BannerComponent implements OnInit, OnDestroy {
  notice: string;
  spead: number;
  isShowNotice: boolean;
  bannerList: BannerModel[] = [];
  swiper: any;
  constructor(private homeService: HomeService,
              private userStoreService: UserStoreService,
              private themableBrowserService: ThemableBrowserService,
              private navigateService: NavigateService
              ) {
    this.isShowNotice = false;
  }

  ngOnInit() {
    // this.initNotice();
    this.getBannerList();
  }

  ngOnDestroy() {
    if (this.swiper) this.swiper.destroy();
  }

  // initNotice() {
  //   const showNotice = sessionStorage.getItem('isShowNotice');
  //   if (showNotice && !JSON.parse(showNotice)) return;
  //   this.isShowNotice = true;
  //   this.getNotice();
  // }

  // getNotice() {
  //   this.homeService.getNoticeList().subscribe(res => {
  //     if (res && res.length) {
  //       this.notice = res[0].content;
  //       this.spead = this.notice.length > 24 ? Math.ceil(this.notice.length / 3) : 8;
  //     }
  //   });
  // }

  getBannerList() {
    // this.homeService.getBannerList().subscribe(res => {
    //   if (res && res.length) {
    //     res.forEach(value => {
    //       this.bannerList.push(new BannerModel(value.url, value.href));
    //     });
    //     setTimeout(() => this.initSwiper(), 0);
    //   }
    // });

     let list = [
      {
        url:'../../assets/img/bg-top1.png',
        href: ''
      },
       {
         url:'../../assets/img/bg-top2.png',
         href: './events/national-Conference/detail/36'
       }
    ];
    list.forEach(value => {
            this.bannerList.push(new BannerModel(value.url, value.href));
          });
    setTimeout(() => this.initSwiper(), 0);
  }

  initSwiper() {
    const base = this;
    this.swiper = new Swiper('.swiper-container', {
      autoplay: (base.bannerList.length > 1) ? 3000 : 0,
      loop: true,
      pagination: '.swiper-pagination',
      autoplayDisableOnInteraction: false
    });
  }

  // closeNotice() {
  //   this.isShowNotice = false;
  //   sessionStorage.setItem('isShowNotice', JSON.stringify(this.isShowNotice));
  // }

  touchBanner(e) {
    const target = e.target;
    if (target && target.dataset) {
      const url = target.dataset.url;
      if (url) this.goPage(url);
    }
  }

  goPage(url) {
    this.navigateService.pushToRoute(url);
    // if (this.userStoreService.isLogin) {
    //   if (url.includes('http')) {
    //     this.themableBrowserService.openOutLinksInApp(url);
    //   } else {
    //     this.navigateService.push('/home');
    //     this.navigateService.pushToRoute(url);
    //   }
    // } else {
    //   this.navigateService.push('/home');
    //   this.navigateService.pushToRoute('/login');
    // }
  }

}

export class BannerModel {
  constructor(public imgUrl?: string,
              public targetUrl?: string) {}
}



