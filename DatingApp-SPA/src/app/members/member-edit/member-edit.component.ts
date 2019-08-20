import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styles: [
    '.img-thumbnail {margin: 25px; width: 85%;}',
    '.card-body {padding: 0 25px;}',
    '.card-footer {padding: 10px 15px; background-color: #fff; border-top: none;}'
  ]
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editForm') editForm: NgForm;
  user: User;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor( private route: ActivatedRoute,
               private _alertify: AlertifyService,
               private _userService: UserService,
               private _authService: AuthService ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  updateUser() {
    this._userService.updateUser(this._authService.decodedToken.nameid, this.user).subscribe(next => {
      this._alertify.success('Profile updated successfully');
      this.editForm.reset(this.user);
    }, error => {
      this._alertify.error(error);
    });
  }

}
