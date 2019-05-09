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
  error: string;
  constructor(private userServ: UserService) { }
  
  login(){
    this.userServ.login({"email": this.email, "password": this.password}).subscribe(res => {
      if(res['error']){
        this.error = res['error'];
        return
      }
      this.userServ.saveUser(res);
    })
  }

  ngOnInit() {
  }
}
