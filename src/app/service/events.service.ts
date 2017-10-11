import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable()
export class EventsService {

  constructor(private httpclientService: HttpClientService) { }

  getNationalEventes(){
    return this.httpclientService.getMethod({
      url: 'events/national',
      data: {
        page_index: 1,
        page_size: 1
      }
    })
  }

  getWorkshopEventes(){
    return this.httpclientService.getMethod({
      url: 'events/workshop',
      data: {
        page_index: 1,
        page_size: 1
      }
    })
  }

}
