import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;

  constructor(private navigateService: NavigateService) {
    this.isLogin = false;
  }

  ngOnInit() {
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}
