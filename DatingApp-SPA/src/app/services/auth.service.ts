import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:5000/api/auth/';

  constructor( private http: HttpClient ) { }

  login(model: any) {
    let url = this.baseUrl + 'login';
    return this.http.post(url, model).pipe(map( (resp: any) => {
      const user = resp;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    }));
  }

  register(model: any) {
    let url = this.baseUrl + 'register';
    return this.http.post(url, model)
  }
}
