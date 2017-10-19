import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.styl']
})
export class NewsIndexComponent implements OnInit {

  hasNews: boolean;
  showLists: any;
  page: any = {pageIndex: 1, pageCount: 12};  //获取当前页和总页数

  constructor(private navigateService: NavigateService,
              private newsService: NewsService) {
    this.hasNews = true;
  }

  ngOnInit() {
    this.newsService.getNewsList(0,1).subscribe( res => {
      this.showList(res) , err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    })
  }

  showList(list) {
    this.showLists = list.rows;
    this.page.pageCount = list.total;
    if(list.rows.length > 0) {
      this.hasNews = true;
    } else {
      this.hasNews = false;
    }
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  onShowPage(page) {
    this.page.pageIndex = page;

    this.newsService.getNewsList(0,page).subscribe(res => {
      this.showList(res), err => {
        if (err && err.status === 401) this.navigateService.pushToRoute('/home');
      }
    });

  }

}
