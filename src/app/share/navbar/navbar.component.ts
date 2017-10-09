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

  constructor(private navigateService: NavigateService) {
    this.currentId = 1;
  }

  ngOnInit() {
  }

  gopage(url,num) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
    this.currentId = num;
    console.log(this.currentId);
  }

}
