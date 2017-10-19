import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable()
export class NewsService {

  constructor(private httpClientService: HttpClientService ) { }

  getNewsList(role,page) {
    return this.httpClientService.getMethod({
      url: '/web/nc/queryNcList/'+role+'/'+page,
    })
  }

}
