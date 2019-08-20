import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<User[]> {
    let url = this.baseUrl + 'users'
    // Console Log just to watch what the function does
    console.log('GET:', url);
    return this.http.get<User[]>(url);
  }

  getUser(id: number): Observable<User> {
    let url = this.baseUrl + 'users/' + id;
    // Console Log just to watch what the function does
    console.log('GET:', url);
    return this.http.get<User>(url);
  }

  updateUser(id: number, user: User) {
    let url = this.baseUrl + 'users/' + id;
    // Console Log just to watch what the function does
    console.log('PUT:', url);
    return this.http.put(url, user);
  }
}
