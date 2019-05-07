import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styles: []
})
export class ValueComponent implements OnInit {

  URL_API: string = 'http://localhost:5000';
  values: any;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.getValues();
  }

  public getValues(): void {
    let url = this.URL_API + '/api/values';
    this.http.get(url).subscribe( 
      (resp: any) => {
        this.values = resp;
      },
      (error: any) => {
        console.log(error);
      });
  }

}
