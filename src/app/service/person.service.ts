import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service'

@Injectable()
export class PersonService {

  constructor(private httpclientService: HttpClientService) { }

  getUserInfo(email) {
    return this.httpclientService.getMethod({
      url: 'user/info',
      data: {
        email: email
      }
    })
  }

}
