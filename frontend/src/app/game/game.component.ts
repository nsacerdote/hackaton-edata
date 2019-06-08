import { Component, OnInit } from '@angular/core';
import { Pos } from './model/pos';
import { CellActor } from './model/cell.actor';
import { Level } from './model/level';
import { Scene } from './model/scene';
import {MoveRightAction} from './model/move-right.action';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private levels: Record<string, Level> = {
    INTRO: {
      scenes: [
        new Scene('/assets/images/background.png',
          [
            new CellActor(new Pos(300, 200), true, [new MoveRightAction(1000), new MoveRightAction(1000)]),
            new CellActor(new Pos(100, 100), false, [new MoveRightAction(1000)])
          ])
      ]
    }
  };

  level: Level = null;
  currentScene: Scene = null;

  constructor() {}

  ngOnInit() {
    this.loadIntroLevel();
    this.gameLoop();
  }

  private loadIntroLevel() {
    this.level = this.levels.INTRO;
    this.currentScene = this.level.scenes[0];
  }

  loadNextScene() {
    const nextIndex = this.level.scenes.indexOf(this.currentScene) + 1;
    this.currentScene = this.level.scenes[nextIndex];
  }

  gameLoop() {
    setInterval(() => this.currentScene.act(), 16);
  }
}
