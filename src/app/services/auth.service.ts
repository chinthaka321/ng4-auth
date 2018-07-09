import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)) 
      .map(reseponse => {
        console.log(reseponse.json());
        let result = reseponse.json();
        if(result && result.token){
          localStorage.setItem('token',result.token);
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    return tokenNotExpired();

    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem('token');

    // if(!token)
    //   return false;

    // let expirationDate = jwtHelper.getTokenExpirationDate(token);
    // let isExpired = jwtHelper.isTokenExpired(token);

    // // console.log('Expiration',expirationDate);
    // // console.log('isExpired',isExpired);

    // return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if(!token) return null;

    let jwtHelper = new JwtHelper();
    return new JwtHelper().decodeToken(token);
  }
}

