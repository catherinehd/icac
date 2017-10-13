import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {
  num: number;

  currentId: number;
  showToggleId: number;
  hideToggle: boolean;

  constructor(private navigateService: NavigateService) {
    this.currentId = 1;
  }

  ngOnInit() {
  }

  gopage(url,num,title) {
    this.navigateService.push();
    if(title) {
      this.navigateService.pushToRoute(url+'/'+title)
    } else {
      this.navigateService.pushToRoute(url)
    }
    this.currentId = num;
    this.hideToggle = true;
  }

  showToggle(num) {
    this.showToggleId = num;
    this.hideToggle = false;
  }

  notShowToggle() {
    this.hideToggle = true;
  }


}
