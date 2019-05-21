import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _authService: AuthService,
               private _alertify: AlertifyService,
               private router: Router ) { 
  }

  canActivate(): boolean {
    if ( this._authService.loggedIn() ) {
      return true;
    }
    
    this._alertify.error('YOU SHALL NOT PASS');
    this.router.navigate(['/home']);
    return false;
  }
}
