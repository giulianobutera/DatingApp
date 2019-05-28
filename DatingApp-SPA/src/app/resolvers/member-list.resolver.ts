import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {

    constructor( private _userService: UserService,
                 private router: Router,
                 private _alertify: AlertifyService ) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this._userService.getUsers().pipe(catchError(error => {
            this._alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return of(null);
        }));
    }
}