import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
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
