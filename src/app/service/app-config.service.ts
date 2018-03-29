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
        this.tel = '4006963127';
        this.api = 'https://www.chinaicac.org/icac';
        break;
      default:
        break;
    }
  }

}
