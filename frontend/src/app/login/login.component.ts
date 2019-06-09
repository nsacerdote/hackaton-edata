import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidForm = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  login() {
    if (this.username && this.password) {
      this.authenticationService.setLoggedUser({name: this.username});
      this.router.navigate(['headquarter']);
    } else {
      this.invalidForm = true;
    }
  }

}
