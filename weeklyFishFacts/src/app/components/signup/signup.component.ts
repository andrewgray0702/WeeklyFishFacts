import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  repeatPass: string;
  constructor(private userServ: UserService) { }

  signup(){
    this.userServ.signupService({
      "email": this.email,
      "password": this.password
    })
  }

  ngOnInit() {
  }

}
