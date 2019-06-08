import { Component, OnInit } from '@angular/core';
import { Pos } from './model/pos';
import { CellActor } from './model/cell.actor';
import { Level } from './model/level';
import { Scene } from './model/scene';
import { Dialog } from './model/dialog';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private levels: Record<string, Level> = {
    INTRO: {
      scenes: [
        new Scene(
          '/assets/images/background.png',
          [
            new CellActor(new Pos(300, 200), true, []),
            new CellActor(new Pos(100, 100), false, [])
          ],
          [
            new Dialog(
              'This is the message',
              '/assets/audio/narrative/intro_scene_1_dialog_1.wav',
              '/assets/images/doctor.png'
            ),
            new Dialog(
              'This is the message 2',
              '/assets/audio/narrative/intro_scene_1_dialog_2.wav',
              '/assets/images/doctor.png'
            )
          ]
        ),
        new Scene(
          '/assets/images/background.png',
          [
            new CellActor(new Pos(200, 200), true, []),
            new CellActor(new Pos(500, 100), false, [])
          ],
          [
            new Dialog(
              'Scene 2',
              '/assets/audio/narrative/intro_scene_2_dialog_1.wav',
              '/assets/images/doctor.png'
            ),
            new Dialog(
              'Scene 2 the message 2',
              '/assets/audio/narrative/intro_scene_2_dialog_2.wav',
              '/assets/images/doctor.png'
            )
          ]
        )
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
