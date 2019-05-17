import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:5000/api/auth/';
  private jwtHelper = new JwtHelperService();
  public decodedToken: any;

  constructor( private http: HttpClient ) { }

  login(model: any) {
    let url = this.baseUrl + 'login';
    return this.http.post(url, model).pipe(map( (resp: any) => {
      const user = resp;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
        console.log(this.decodedToken);
      }
    }));
  }

  register(model: any) {
    let url = this.baseUrl + 'register';
    return this.http.post(url, model)
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
