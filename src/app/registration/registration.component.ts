import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';
import { User } from '../common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  UserList = new User();
  strErr: any;
  constructor(
    public router: Router,
    public Commonservice: CommonserviceService
  ) { }
  onSubmitRegistration() {
    if (!this.UserList.username) {
      this.strErr += 'User name is Required..' + '</br>'
    }
    if (!this.UserList.password) {
      this.strErr += 'Password is Required..' + '</br>'
    }
    if (!this.UserList.email) {
      this.strErr += 'Email is Required..' + '</br>'
    }
    if (!this.UserList.mobileno) {
      this.strErr += 'mobileno is Required..' + '</br>'
    }
    if (this.UserList) {
      this.Commonservice.userRegistration(this.UserList).subscribe((e) => {
        if (e) {
          console.log(e);
          this.router.navigate(['login']);
        }
      });
    }
    // this.router.navigate(['login']);
  }
}

