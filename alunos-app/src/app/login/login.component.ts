import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Config } from '../common/config';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  withErrors: boolean = false;
  classMessage : string = 'bg-info';
  message: string;

  constructor(private router: Router, 
              private http: Http,
              private config: Config) { }              

  ngOnInit() {} 

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post(this.config.BASEURI+'login',body, { headers: contentHeaders })
      .subscribe(
        response => {
            this._salvarToken(response);
            this.router.navigate(['/home']);  
        },
        error => {       
            this.classMessage = 'bg-danger';
            this.withErrors = true;
            this.message = error.json().message || error.text();
          },
        () => console.log('Default')        
      );
  }  

  private _salvarToken(res) {
      if (res.status !== 200) {
          return;
      }

      let headers = res.headers;      
      let authHeader = headers.get('authorization')

      if (authHeader) {
          localStorage.setItem('id_token', authHeader.replace('id_token',''));
      }
  }   

}
