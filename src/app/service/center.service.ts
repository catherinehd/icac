import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable()
export class HomeService {

  constructor(private httpClientService: HttpClientService ) { }

  getrankingList(email) {
    return this.httpClientService.getMethod({
      url: 'news/getList',
      data: {
      }
    })
  }

  getHignSchoolList(email) {
    return this.httpClientService.getMethod({
      url: 'news/getList',
      data: {
        name: email
      }
    })
  }

  getSeniorSchoolList(email) {
    return this.httpClientService.getMethod({
      url: 'news/getList',
      data: {
        name: email
      }
    })
  }

}
