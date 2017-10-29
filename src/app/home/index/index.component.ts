import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  showLists: any;
  constructor(private navigateService: NavigateService,
              private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNewsList(0,1).subscribe( res => {
      this.showList(res)
    })
  }

  showList(data) {
    this.showLists = data.rows.slice(0,3);
    for(let i = 0;i <= this.showLists.length; i++){
      let t = this.showLists[i].ncTime;
      this.showLists[i].ncTime = this.format(t);
    }
  }

  format(t) {
    let unixTimestamp = new Date(t);
    let commonTime = unixTimestamp.toLocaleString();
    return commonTime;
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}
