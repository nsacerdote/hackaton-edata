import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  playerName: String;

  constructor(private renderer: Renderer2,
              private router: Router) { }

  ngOnInit() {
    this.playerName = "Natalio";
  }

}
