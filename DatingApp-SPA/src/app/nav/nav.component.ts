import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {
  
  model: any = {};

  constructor( private _authService: AuthService ) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.model).subscribe(next => {
      console.log('Logged in successfuly');
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
