import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../../model/actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  @Input() actor: Actor;

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.actor.onClicked();
  }

}
