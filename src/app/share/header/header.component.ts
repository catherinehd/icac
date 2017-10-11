import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;

  modal = {
    title: 'ChinaICAC Member Sign in',
    isSigninShow: false,
  }

  constructor(private navigateService: NavigateService) {
    this.isLogin = false;
  }

  ngOnInit() {
  }

  login() {

  }


  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}
