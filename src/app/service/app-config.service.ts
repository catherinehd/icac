import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
  appName: string;
  website: string;
  company: string;
  tel: string;
  api: string;
  hasLianlianPay: boolean;
  shareLink: string;
  wechatId: string;
  alipayAccount: string;
  alipayQrcode: string;
  alipayName: string;

  constructor() {
    this.initConfig('icac');
  }

  initConfig(appShorthand: string): void {
    switch (appShorthand) {
      case 'icac':
        this.appName = 'Icac';
        this.website = 'www.91pzb.com';
        this.company = '杭州泛友网络科技有限公司';
        this.tel = '4006963127';
        this.api = 'https://www.chinaicac.org/icac';
        this.hasLianlianPay = true;
        this.shareLink = 'https://h5.91pzb.com';
        this.alipayName = '杭州亨韵网络科技有限公司';
        this.alipayQrcode = 'FKX05749LIOLGU6IVHYLF4';
        this.alipayAccount = 'hengyunjinrong@163.com';
        this.wechatId = 'wx5245cd6f6584eb8c';
        break;
      default:
        break;
    }
  }

}
