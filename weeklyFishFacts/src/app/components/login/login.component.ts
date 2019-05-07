import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private userServ: UserService) { }
  
  login(){
    this.userServ.loginService({
      "email": this.email, "password": this.password
    })
  }

  ngOnInit() {
  }

}
