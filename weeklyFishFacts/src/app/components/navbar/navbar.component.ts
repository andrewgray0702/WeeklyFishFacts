import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private userServ: UserService) {
     this.userServ.isLoggedIn.subscribe(val => {
       this.isLoggedIn = val;
     })
   }
  
  logout(){
    this.userServ.logout();
  }
  
  ngOnInit() {
  }

}
