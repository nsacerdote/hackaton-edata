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
      nextLevel: 'MISSION_CHEMO',
      scenes: [
        new Scene(
          '/assets/images/background.png',
          [
            new CellActor(new Pos(300, 200), true, []),
            new CellActor(new Pos(100, 100), false, [])
          ],
          [
            new Dialog(
              'Jajajajaja, he llegado a tu cuerpo y no pienso marcharme. Solo podrás sacarme de aquí si cuentas con ayuda. ' +
              'Pero aún soy débil, necesito crear más como yo…',
              '/assets/audio/narrative/introCancer01.mp3',
              '/assets/images/portraits/bad-cell-portrait.png'
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
              'Lo conseguí, pero necesitamos ser más si queremos llegar a formar un tumor.',
              '/assets/audio/narrative/introCancer02.mp3',
              '/assets/images/portraits/bad-cell-portrait.png'
            )
          ]
        ),
        new Scene(
          '/assets/images/bg-hospital-room.png',
          [
          ],
          [
            new Dialog(
              '¡Ese cáncer haciendo de las suyas! Se piensa que nadie puede con él, pero está muy equivocado. ' +
              'Lo hemos pillado a tiempo y podemos empezar a acabar con él',
              '/assets/audio/narrative/introCancer03.mp3',
              '/assets/images/portraits/doctor-portrait.jpg'
            ),
            new Dialog(
              'Va a ser un camino largo, pero le vamos a dar mucha guerra y no sabe que contamos con ayuda',
              '/assets/audio/narrative/introCancer04.mp3',
              '/assets/images/portraits/doctor-portrait.jpg'
            )
          ]
        ),
        new Scene(
          '/assets/images/bg-all-superheroes.png',
          [
          ],
          [
            new Dialog(
              'Te ayudaremos, pero no podremos nosotros solos. Tú también tendrás que ser un superhéroe. ¡Estaremos esperándote!',
              '/assets/audio/narrative/introCancer05.mp3',
              '/assets/images/portraits/superheroes-portrait.jpg'
            )
          ]
        )
      ]
    },
    MISSION_CHEMO: {
      nextLevel: 'HEADQUARTER',
      scenes: [
        new Scene(
          '/assets/images/background.png',
          [
          ],
          [
            new Dialog(
              'Cada vez queda menos energía donde estamos. Deberíamos metastatizarnos y alcanzar otras partes del cuerpo',
              '/assets/audio/narrative/misionQuimio01.mp3',
              '/assets/images/portraits/bad-cell-portrait.png'
            ),
            new Dialog(
              '¡Oh no! Está intentando metastatizarse para crecer por tu cuerpo. ¡Debemos actuar!',
              '/assets/audio/narrative/misionQuimio02.mp3',
              '/assets/images/portraits/doctor-portrait.jpg'
            )
          ]
        ),
        new Scene(
          '/assets/images/bg-hospital-room.png',
          [
          ],
          [
            new Dialog(
              'Necesitamos pincharte para poder inyectarte este suero. ' +
              'Cuando lo hagamos nos ayudará a destruir una parte del cáncer y protegerá tus células.',
              '/assets/audio/narrative/misionQuimio03.mp3',
              '/assets/images/portraits/doctor-portrait.jpg'
            ),
            new Dialog(
              'Es verdad que al principio te sentirás algo mareado o que te pueda doler la barriga, ' +
              'pero después tu cuerpo estará mejor preparado.',
              '/assets/audio/narrative/misionQuimio04.mp3',
              '/assets/images/portraits/doctor-portrait.jpg'
            ),
            new Dialog(
              '¿Puedo pincharte para dártelo?',
              '/assets/audio/narrative/misionQuimio05.mp3',
              '/assets/images/portraits/nurse-portrait.jpg',
              true
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
    console.log('loadIntroLevel');
    this.currentScene = this.level.scenes[0];
  }

  loadNextScene() {
    const nextIndex = this.level.scenes.indexOf(this.currentScene) + 1;
    if (nextIndex < this.level.scenes.length) {
      this.currentScene = this.level.scenes[nextIndex];
    } else {
      this.loadNextLevel();
    }
  }

  loadNextLevel() {
    console.log('loadNextLevel');
    this.level = this.levels[this.level.nextLevel];
    this.currentScene = this.level.scenes[0];
  }

  gameLoop() {
    setInterval(() => this.currentScene.act(), 16);
  }
}
