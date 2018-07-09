import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp,private http:Http) {
  }

  // constructor(private http: Http) {
  // }

  getOrders() { 

    // Once you change constructor Http parameter to AuthHttp don't need following code
    // let headers = new Headers();
    // let token = localStorage.getItem('token');
    // headers.append('Authorization','Bearer' + token)

    // let options = new RequestOptions({headers:headers});

    return this.authHttp.get('/api/orders')
      .map(response => response.json());

    // Old http call with auth parameter
    // return this.http.get('/api/orders',options)
    //   .map(response => response.json());
  }
}
