import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from './user.model'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user = new User
  loginState
  loginForm: FormGroup
  signupForm: FormGroup

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl(this.user.name),
      password: new FormControl(this.user.password)
    })
    this.signupForm = new FormGroup({
      name: new FormControl(this.user.name),
      password: new FormControl(this.user.password)
    })
  }

  login(){
    this.http.post('http://localhost:3000/user/login', this.user).subscribe(res => {
      alert()
    })
  }
  signup(){
    this.http.post('http://localhost:3000/user/signup', this.user).subscribe(res => console.log(res))
  }
}
