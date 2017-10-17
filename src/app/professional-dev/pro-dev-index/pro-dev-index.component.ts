import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { ProDevService } from '../../service/pro-dev.service';

@Component({
  selector: 'app-pro-dev-index',
  templateUrl: './pro-dev-index.component.html',
  styleUrls: ['./pro-dev-index.component.styl']
})
export class ProDevIndexComponent implements OnInit {

  hasWebinar: boolean;
  showLists: any;

  constructor(private navigateService: NavigateService,
              private prodevService: ProDevService) {
    this.hasWebinar = true;
  }

  ngOnInit() {

    //this.prodevService.getProDev(1).subscribe(res => {
    // this.showList(res), err => {
     // if (err && err.status === 401) this.navigateService.pushToRoute('/home');
   // }
   // });

    const array = [
      {
        wsId:1,
        wsTime: 'August 24, 2017',
        state: 0,
        createBy: '',
        createTime: '',
        updateBy: '',
        updateTime: '',
        wsUrl: 'http://www.findunet.com',
        wsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo...',
        wsTitle:'HTC is considering including a spin-off of VR and overall salesHTC ...',
        wsDurl:'http://www.findunet.com',
      },
      {
        wsId:2,
        wsTime: 'August 24, 2017',
        state: 0,
        createBy: '',
        createTime: '',
        updateBy: '',
        updateTime: '',
        wsUrl: 'http://www.findunet.com',
        wsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo...',
        wsTitle:'HTC is considering including a spin-off of VR and overall salesHTC ...',
        wsDurl:'http://www.findunet.com',
      },
      {
        wsId:3,
        wsTime: 'August 24, 2017',
        state: 0,
        createBy: '',
        createTime: '',
        updateBy: '',
        updateTime: '',
        wsUrl: 'http://www.findunet.com',
        wsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo...',
        wsTitle:'HTC is considering including a spin-off of VR and overall salesHTC ...',
        wsDurl:'http://www.findunet.com',
      },
    ];

    this.showList(array);
  }

  showList(data) {
    this.showLists = data;
    if(data.length > 0) {
      this.hasWebinar = true;
    } else {
      this.hasWebinar = false;
    }
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }


}
