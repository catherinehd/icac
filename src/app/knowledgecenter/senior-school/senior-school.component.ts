import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-senior-school',
  templateUrl: './senior-school.component.html',
  styleUrls: ['./senior-school.component.styl','../school/school.component.styl']
})
export class SeniorSchoolComponent implements OnInit {

  constructor(private navigateService: NavigateService) { }

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
