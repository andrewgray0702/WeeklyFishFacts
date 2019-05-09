import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  repeatPass: string = '';
  error: string;
  constructor(private userServ: UserService) { }
  signup() {
    if (this.password == this.repeatPass) {
      this.userServ.signup({
        "email": this.email,
        "password": this.password
      }).subscribe(res => {
        if (res['error']) {
          this.error = res['error'];
          return
        }
        this.userServ.newUser();
      })
    } else {
      this.error = "Passwords do not match!"
    }
  }

  ngOnInit() {
  }

}
