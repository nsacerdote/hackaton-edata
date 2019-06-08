import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ngx-animate';
import {shake} from "ngx-animate/lib";

@Component({
  selector: 'app-animated-shape',
  templateUrl: './animated-shape.component.html',
  styleUrls: ['./animated-shape.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('shake', [transition('* => *', useAnimation(shake))])
  ]
})
export class AnimatedShapeComponent implements OnInit {
  bounce: any;
  shake: any;

  constructor() { }

  ngOnInit() {

  }

  bounceIt() {
    this.bounce = this.bounce!== true;
  }

  shakeIt() {
    this.shake = this.shake!== true;
  }

}
