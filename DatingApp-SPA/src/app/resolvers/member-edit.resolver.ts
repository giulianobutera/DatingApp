import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

    constructor( private _userService: UserService,
                 private router: Router,
                 private _alertify: AlertifyService,
                 private _authService: AuthService ) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this._userService.getUser(this._authService.decodedToken.nameid).pipe(catchError(error => {
            this._alertify.error('Problem retrieving your data');
            this.router.navigate(['/members']);
            return of(null);
        }));
    }
}