import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClientService {
  baseUrl: string;
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient,
              private appConfigService: AppConfigService ) {
    this.baseUrl = this.appConfigService.api;
    const token = localStorage.getItem('token') || '';
    this.refreshHeaders(token);
  }

  refreshHeaders(token): void {
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  setUrl(options: any): string {
    return options.fullUrl || this.baseUrl + options.url;
  }

  setHttpOptions(type: string, httpOptions: any): any {
    switch (type) {
      case 'text':
        httpOptions.responseType = 'text';
        break;
      case 'arraybuffer':
        httpOptions.responseType = 'arraybuffer';
        break;
      case 'blob':
        httpOptions.responseType = 'blob';
        break;
    }
    return httpOptions;
  }

  setParams(data: any): string {
    if (data === undefined) return '';
    let fromString = '';
    for (const key in data) {
      fromString += key + '=' + data[key] + '&';
    }
    return fromString.slice(0, -1);
  }

  getMethod(options: Options): Observable<any> {
    const headers = this.headers;
    const params = new HttpParams({
      fromString: this.setParams(options.data)
    });
    const httpOptions = !options.type ? {headers, params} : this.setHttpOptions(options.type, {headers, params});
    return this.httpClient.get(this.setUrl(options), httpOptions);
  }

  postMethod(options: Options): Observable<any> {
    const headers = this.headers;
    const httpOptions = !options.type ? {headers} : this.setHttpOptions(options.type, {headers});
    return this.httpClient.post(this.setUrl(options), this.setParams(options.data), httpOptions);
  }

  putMethod(options: Options): Observable<any> {
    const headers = this.headers;
    const httpOptions = !options.type ? {headers} : this.setHttpOptions(options.type, {headers});
    return this.httpClient.put(this.setUrl(options), this.setParams(options.data), httpOptions);
  }
}

interface Options {
  data?: any;
  url?: string;
  type?: string;
  fullUrl?: string;
}