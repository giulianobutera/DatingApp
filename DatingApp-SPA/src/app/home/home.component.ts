import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  registerMode: boolean;
  URL_API: string = 'http://localhost:5000/api/';

  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }

  // registerToggle() {
  //   this.registerMode = !this.registerMode;
  // }

  // cancelRegisterMode(registerMode: boolean) {
  //   this.registerMode =  registerMode;
  // }

}
