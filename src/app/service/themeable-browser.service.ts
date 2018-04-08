import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable()
export class ThemableBrowserService {
  options: any;
  constructor (private appConfigService: AppConfigService) {
    this.options = {
      statusbar: {
        color: '#23282dff',
      },
      toolbar: {
        height: 44,
        color: '#23282dff'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true
      },
      backButton: {
        wwwImage: 'assets/image/back.png',
        wwwImagePressed: 'assets/image/back.png',
        wwwImageDensity: 2,
        align: 'left',
        event: 'backPressed'
      },
      forwardButton: {
        event: 'forwardPress'
      },
      closeButton: {
        wwwImage: 'assets/image/close.png',
        wwwImagePressed: 'assets/image/close.png',
        wwwImageDensity: 2,
        align: 'right',
        event: 'closePressed'
      },
      backButtonCanClose: true
    };
  }

  openOutLinksInApp(url) {
    const param = `name=${this.appConfigService.appName}&t=${localStorage.getItem('token')}`;
    url = url.includes('?') ? url + '&' + param : url + '?' + param;
    try {
      if (cordova && cordova.ThemeableBrowser) {
        url = url + '&app=1';
        this.open(url);
      } else {
        window.open(url);
      }
    } catch (err) {
      console.log('Out ThemeableBrowser catch err------', err);
      window.open(url);
    }
  }

  open(url) {
    try {
      cordova.ThemeableBrowser.open(url, '_blank', this.options)
        .addEventListener('backPressed', (event) => {
          console.log('ThemeableBrowser backpress------', event);
        }, false)
        .addEventListener(cordova.ThemeableBrowser.EVT_ERR, (msg) => {
          console.log('ThemeableBrowser err-------', msg);
        }, false)
        .addEventListener(cordova.ThemeableBrowser.EVT_WRN, (msg) => {
          console.log('ThemeableBrowser warn-------', msg);
        }, false);
    }catch (err) {
      console.log('In ThemeableBrowser catch err------', err);
      window.open(url);
    }
  }
}
