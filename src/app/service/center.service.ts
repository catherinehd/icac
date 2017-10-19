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

  getUniversityList(page) {
    return this.httpClientService.getMethod({
      url: '/web/usity/queryUsityList/'+page,
    })
  }

  getUniversityDetailList(id) {
    return this.httpClientService.getMethod({
      url: '/web/usity/queryUsityById/'+id,
    })
  }

  getMiddleSchoolList(page) {
    return this.httpClientService.getMethod({
      url: '/web/middle/queryMiddleList/'+page,
    })
  }


  getMiddleSchoolDetailList(id) {
    return this.httpClientService.getMethod({
      url: '/web/middle/queryMiddleById/'+id,
    })
  }

  search(msg,type) {
    return this.httpClientService.getMethod({   //同时返回总条数
      url: '/web/usity/queryUsityList',
      data:{
        msg: msg,
        type: type,
      }
    })
  }

}


