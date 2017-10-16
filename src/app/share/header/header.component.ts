import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service'
import { UserStoreService } from '../../service/user-store.service'
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;
  user: UserModel;


  modal = {
    title: 'ChinaICAC Member Sign in',
    isSigninShow: false,
  }

  constructor(private navigateService: NavigateService,
              private userstoreService: UserStoreService) {

    this.isLogin = this.userstoreService.isLogin();
    if (this.isLogin ) {
      //this.userstoreService.getUser().subscribe(res => this.user = res);
    }
  }

  ngOnInit() {
  }

  signout() {
    this.userstoreService.logout();
    this.navigateService.clearRouteList();
    if(location.pathname==='/home') {
      location.reload();
    } else {
      this.navigateService.pushToRoute('/home');
    }
  }


  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}
