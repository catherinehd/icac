import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable()
export class HomeService {

  constructor(private httpClientService: HttpClientService ) { }

  getNewsList(email) {
    return this.httpClientService.getMethod({
      url: 'news/getList',
      data: {
        name: email
      }
    })
  }

}
