import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';
import { User } from '../common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: SocialUser | undefined;
  loggedIn: boolean = false;
  UserList = new User();
  strErr: any;
  constructor(
    private authServicce: SocialAuthService,
    private router: Router,
    public Commonservice: CommonserviceService
  ) {}
  ngOnInit() {
    this.authServicce.authState.subscribe((user) => {
      this.user = user;

      this.router.navigate(["home"]);
      this.loggedIn = user != null;
    });
  }

  onSubmitLogin() {
    if (!this.UserList.username) {
      this.strErr = "Username is Required.";
    }
    if (!this.UserList.email) {
      this.strErr = "Email is Required.";
    }
    if (!this.UserList.password) {
      this.strErr = "Password is Required.";
    }
    this.Commonservice.userLogin(this.UserList).subscribe((e) => {
      if(e){
        this.router.navigate(["home"]);
      }
    });
  }
}
