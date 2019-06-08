import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() playerName: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showProfile(){
    this.router.navigate(['profile']);
  }

}
