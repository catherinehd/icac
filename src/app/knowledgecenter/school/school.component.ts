import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.styl']
})
export class SchoolComponent implements OnInit {

  isempty: boolean;

  constructor(private navigateService: NavigateService) {
    this.isempty = false;
  }

  ngOnInit() {
  }

  gopage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  search() {
    console.log('search school')
  }

}
