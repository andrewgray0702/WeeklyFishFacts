import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isSignedUp = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  signup(loginData) {
    return this.http.post('http://localhost:3000/api/users/signup', loginData)
  }

  login(loginData) {
    return this.http.post('http://localhost:3000/api/users/login', loginData)
  }
  saveUser(user){
    this.isLoggedIn.next(true);
    console.log(this.isLoggedIn);
    localStorage.setItem('user', user[0].userID);
    this.router.navigate(['/suggest']);
  }
  newUser(){
    this.isSignedUp.next(true);
    console.log(this.isSignedUp);
    this.router.navigate(['/login']);
  }

  logout(){
    this.isLoggedIn.next(false);
    this.isSignedUp.next(false);
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

}
