import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser: User;

  constructor() { }

  getLoggedUser() {
    return this.loggedUser;
  }

  setLoggedUser(user: User) {
    this.loggedUser = user;
  }
}
