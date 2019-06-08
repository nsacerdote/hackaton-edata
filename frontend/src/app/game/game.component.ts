import { Component, OnInit } from '@angular/core';
import { Pos } from './model/pos';
import { CellActor } from './model/cell.actor';
import { Level } from './model/level';
import { Scene } from './model/scene';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private levels: Record<string, Level> = {
    INTRO: {
      scenes: [
        {
          background: '/assets/images/background.png',
          actors: [
            new CellActor(new Pos(300, 200), true),
            new CellActor(new Pos(100, 100), false)
          ]
        },
        {
          background: '/assets/images/background.png',
          actors: [
            new CellActor(new Pos(200, 200), true),
            new CellActor(new Pos(500, 100), false)
          ]
        }
      ]
    }
  };

  level: Level = null;
  currentScene: Scene = null;

  constructor() {}

  ngOnInit() {
    this.loadIntroLevel();
  }

  private loadIntroLevel() {
    this.level = this.levels.INTRO;
    this.currentScene = this.level.scenes[0];
  }

  loadNextScene() {
    const nextIndex = this.level.scenes.indexOf(this.currentScene) + 1;
    this.currentScene = this.level.scenes[nextIndex];
  }
}
