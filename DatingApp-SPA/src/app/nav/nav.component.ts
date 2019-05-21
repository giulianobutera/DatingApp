import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
    '.dropdown-toggle { cursor: pointer; }',
    '.dropdown-item { cursor: pointer }'
  ]
})
export class NavComponent implements OnInit {
  
  model: any = {};

  constructor( public _authService: AuthService,
               private _alertify: AlertifyService,
               private router: Router ) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.model).subscribe(next => {
      this._alertify.success('Logged in successfuly');
    }, error => {
      this._alertify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this._authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this._alertify.message('Logged out');
    this.router.navigate(['/home']);
  }

}
