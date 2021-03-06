import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable()
export class EventsService {

  constructor(private httpclientService: HttpClientService) { }

  getEventes(role,page){
    return this.httpclientService.getMethod({
      url: '/web/news/queryNewsList/'+role+'/'+page,   //role=0 全国 role=1 工作坊 page为查询第几页
    })
  }

  getDetailEventes(id) {
    return this.httpclientService.getMethod({
      url: '/web/news/queryNewsById/'+id,
    })
  }

  registerConference(fname, lname, theme, mail, num, school) {
    return this.httpclientService.postMethod({
      url: '/web/news/saveSign/',
      data: {
        signFirstname: fname,
        signLastname: lname,
        signTheme: theme,
        signMail: mail,
        signNum: num,
        signSchool: school
      }
    })
  }


}
