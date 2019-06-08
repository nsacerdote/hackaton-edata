import { Component, OnInit } from '@angular/core';
import { Pos } from './model/pos';
import { CellActor } from './model/cell.actor';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  actors = [
    new CellActor(new Pos(300, 200), true),
    new CellActor(new Pos(100, 100), false),
  ];

  constructor() { }

  ngOnInit() {
  }

}
