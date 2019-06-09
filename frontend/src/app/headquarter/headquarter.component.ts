import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-headquarter',
  templateUrl: './headquarter.component.html',
  styleUrls: ['./headquarter.component.scss']
})
export class HeadquarterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showGame(){
    this.router.navigate(['game']);
  }
}
