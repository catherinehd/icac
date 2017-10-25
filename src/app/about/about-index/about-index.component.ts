import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.styl']
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
console.log(location);
  }

  go(url,title) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url)
  }
}
