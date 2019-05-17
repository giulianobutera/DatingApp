import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private jwtHelper = new JwtHelperService();

  constructor (private _authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this._authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
