import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  loginService(data) {
    this.http.post('http://localhost:3000/api/login',data)
  }

}
