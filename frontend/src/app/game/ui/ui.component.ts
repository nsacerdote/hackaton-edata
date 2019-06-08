import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  loggedUser: User;

  constructor(private authenticationService: AuthenticationService) {
    this.loggedUser = authenticationService.getLoggedUser();
  }

  ngOnInit() {
  }

}
