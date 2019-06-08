import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  playerName: String;

  constructor(private renderer: Renderer2,
              private router: Router,
              private authentication: AuthenticationService) { }

  ngOnInit() {
    this.playerName = this.authentication.getLoggedUser().name;
  }

  showGame(){
    this.router.navigate(['game']);
  }
}
