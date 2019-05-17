import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor( private _authService: AuthService,
               private _alertify: AlertifyService ) { }

  ngOnInit() {
  }

  register() {
    this._authService.register(this.model).subscribe( () => {
      this._alertify.success('Registration successful');
    }, error => {
      this._alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
