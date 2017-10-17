import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable()
export class EventsService {

  constructor(private httpclientService: HttpClientService) { }

  getNationalEventes(type,page){
    return this.httpclientService.getMethod({
      url: '/web/news/queryNewsList',
      data: {
        role: 0,
        page: page
      }
    })
  }

  getNationalDetailEventes(id) {
    return this.httpclientService.getMethod({
      url: '/web/news/queryNewsById',
      data: {
        Id: id,
      }
    })
  }

  getWorkshopEventes(type,page){
    return this.httpclientService.getMethod({
      url: '/web/news/queryNewsList',
      data: {
        role: 1,
        page: page
      }
    })
  }

  getWorkshopDetailEventes(id) {
    return this.httpclientService.getMethod({
      url: '/web/news/queryNewsById',
      data: {
        Id: id,
      }
    })
  }

}
