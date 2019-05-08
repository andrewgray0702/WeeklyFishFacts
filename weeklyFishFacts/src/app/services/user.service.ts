import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signupService(loginData) {
    this.http.post('http://localhost:3000/api/users/signup', loginData).subscribe(res =>
      console.log(res)
    )
  }

  loginService(loginData) {
    this.http.post('http://localhost:3000/api/users/login', loginData).subscribe(res => 
      console.log(res)
    )
  }

}
