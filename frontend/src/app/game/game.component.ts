import { Component, OnInit } from '@angular/core';
import { Pos } from './model/pos';
import { CellActor } from './model/cell.actor';
import { Level } from './model/level';
import { Scene } from './model/scene';
import { Dialog } from './model/dialog';
import { MoveToAction } from './model/move-to.action';
import {AnimationAction} from './model/bounce-animation.action';
import {WaitAction} from './model/wait.action';
import { PotionActor } from './model/potion.actor';

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
            new CellActor(new Pos(50, 350), true, []),
            new CellActor(new Pos(900, 350), true, []),
            new CellActor(new Pos(150, 200), true, []),
            new CellActor(new Pos(150, 500), true, []),
            new CellActor(new Pos(750, 200), true, []),
            new CellActor(new Pos(750, 500), true, []),
            new CellActor(new Pos(300, 200), true, []),
            new CellActor(new Pos(300, 350), true, []),
            new CellActor(new Pos(300, 500), true, []),
            new CellActor(new Pos(600, 200), true, []),
            new CellActor(new Pos(600, 350), true, []),
            new CellActor(new Pos(600, 500), true, []),
            new CellActor(new Pos(450, 100), true, []),
            new CellActor(new Pos(450, 600), true, []),
            new CellActor(new Pos(450, 300), false, [])
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
            new CellActor(new Pos(50, 350), true, []),
            new CellActor(new Pos(900, 350), true, []),
            new CellActor(new Pos(150, 200), true, []),
            new CellActor(new Pos(150, 500), true, []),
            new CellActor(new Pos(750, 200), true, []),
            new CellActor(new Pos(750, 500), true, []),
            new CellActor(new Pos(300, 200), true, [
              new WaitAction(3400),
              new AnimationAction('bounce')
            ]),
            new CellActor(new Pos(300, 350), true, [
              new WaitAction(2200),
              new AnimationAction('bounce'),
              new MoveToAction(new Pos(300, 500), 1000),
              new WaitAction(200),
              new MoveToAction(new Pos(300, 350), 1000)
            ]),
            new CellActor(new Pos(300, 500), true, [
              new WaitAction(4000),
              new AnimationAction('bounce')
            ]),
            new CellActor(new Pos(600, 200), true, []),
            new CellActor(new Pos(600, 350), true, []),
            new CellActor(new Pos(600, 500), true, [
              new WaitAction(1000),
              new AnimationAction('bounce')
            ]),
            new CellActor(new Pos(450, 100), true, []),
            new CellActor(new Pos(450, 600), true, []),
            new CellActor(new Pos(450, 300), false, [
              new MoveToAction(new Pos(600, 500), 1000),
              new WaitAction(200),
              new MoveToAction(new Pos(300, 350), 1000),
              new WaitAction(200),
              new MoveToAction(new Pos(300, 200), 1000),
              new WaitAction(200),
              new MoveToAction(new Pos(450, 300), 1000)
            ])
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
          [],
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
            new CellActor(new Pos(50, 350), false, []),
            new CellActor(new Pos(900, 350), true, []),
            new CellActor(new Pos(150, 200), false, []),
            new CellActor(new Pos(150, 500), false, []),
            new CellActor(new Pos(750, 200), true, []),
            new CellActor(new Pos(750, 500), false, []),
            new CellActor(new Pos(300, 200), false, []),
            new CellActor(new Pos(300, 350), false, []),
            new CellActor(new Pos(300, 500), false, []),
            new CellActor(new Pos(600, 200), true, []),
            new CellActor(new Pos(600, 350), false, []),
            new CellActor(new Pos(600, 500), true, []),
            new CellActor(new Pos(450, 100), false, []),
            new CellActor(new Pos(450, 600), true, []),
            new CellActor(new Pos(450, 300), false, [])
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
            new PotionActor(new Pos(600, 300), [])
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
              '/assets/images/portraits/nurse-portrait.png',
              true,
              4,
              2
            )
          ]
        ),
        // index 2
        new Scene(
          '/assets/images/bg-hospital-room.png',
          [
          ],
          [
            new Dialog(
              'Recuerda que a veces los superhéroes tenemos que tomar decisiones difíciles para cumplir ' +
              'con nuestro deber. ¿No lo vas a hacer?',
              '/assets/audio/narrative/estasSeguro.mp3',
              '/assets/images/portraits/superheroes-portrait.jpg',
              true,
              4,
              3
            )
          ]
        ),
        // index 3
        new Scene(
          '/assets/images/bg-hospital-room.png',
          [
          ],
          [
            new Dialog(
              'La lucha tendrá que esperar a otro día.',
              '/assets/audio/narrative/rendirse.mp3',
              '/assets/images/portraits/superheroes-portrait.jpg'
            )
          ],
          7
        ),
        // index 4
        new Scene(
          '/assets/images/background.png',
          [
            new CellActor(new Pos(50, 350), false, []),
            new CellActor(new Pos(900, 350), true, []),
            new CellActor(new Pos(150, 200), false, []),
            new CellActor(new Pos(150, 500), false, []),
            new CellActor(new Pos(750, 200), true, []),
            new CellActor(new Pos(750, 500), false, []),
            new CellActor(new Pos(300, 200), false, []),
            new CellActor(new Pos(300, 350), false, []),
            new CellActor(new Pos(300, 500), false, []),
            new CellActor(new Pos(600, 200), true, []),
            new CellActor(new Pos(600, 350), false, []),
            new CellActor(new Pos(600, 500), true, []),
            new CellActor(new Pos(450, 100), false, []),
            new CellActor(new Pos(450, 600), true, []),
            new CellActor(new Pos(450, 300), false, [])
          ],
          [
            new Dialog(
              'Necesito más energía para la metástasis.',
              '/assets/audio/narrative/misionQuimioSi01.mp3',
              '/assets/images/portraits/bad-cell-portrait.png'
            ),
            new Dialog(
              '¡No te preocupes, yo me encargo!',
              '/assets/audio/narrative/defensaCapitanAmerica.mp3',
              '/assets/images/portraits/captain-america-portrait.jpg'
            )
          ]
        ),
        // index 5
        new Scene(
          '/assets/images/background.png',
          [
            new CellActor(new Pos(50, 350), false, []),
            new CellActor(new Pos(900, 350), true, []),
            new CellActor(new Pos(150, 200), false, []),
            new CellActor(new Pos(150, 500), false, []),
            new CellActor(new Pos(750, 200), true, []),
            new CellActor(new Pos(750, 500), false, []),
            new CellActor(new Pos(300, 200), false, []),
            new CellActor(new Pos(300, 350), false, []),
            new CellActor(new Pos(300, 500), false, []),
            new CellActor(new Pos(600, 200), true, []),
            new CellActor(new Pos(600, 350), false, []),
            new CellActor(new Pos(600, 500), true, []),
            new CellActor(new Pos(450, 100), false, []),
            new CellActor(new Pos(450, 600), true, []),
            new CellActor(new Pos(450, 300), false, [])
          ],
          [
            new Dialog(
              '¡Es hora de freír estas células cancerígenas!',
              '/assets/audio/narrative/ataqueIronman.mp3',
              '/assets/images/portraits/ironman-portrait.png'
            ),
            new Dialog(
              '¡Oh, no!',
              '/assets/audio/narrative/cancerMuere.mp3',
              '/assets/images/portraits/bad-cell-portrait.png'
            )
          ]
        ),
        // index 6
        new Scene(
          '/assets/images/bg-all-superheroes.png',
          [
          ],
          [
            new Dialog(
              'Por ahora debemos descansar, pero hemos dado un gran paso hoy. Aún queda lucha, seguiremos pronto.' +
              ' ¡Bien hecho héroe!',
              '/assets/audio/narrative/misionQuimioFin.mp3',
              '/assets/images/portraits/superheroes-portrait.jpg'
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

  loadNextScene(sceneId) {
    if(sceneId){
      this.goToScene(sceneId);
    }
    else {
      this.currentScene.dialogs;
      let nextIndex;
      if(this.currentScene.nextScene){
        nextIndex = this.currentScene.nextScene;
      }
      else{
        nextIndex = this.level.scenes.indexOf(this.currentScene) + 1;
      }

      this.goToScene(nextIndex);
    }
  }

  goToScene(sceneId: number){
    if (sceneId < this.level.scenes.length) {
      this.currentScene = this.level.scenes[sceneId];
    } else {
      this.loadNextLevel();
    }
  }



  loadNextLevel() {
    this.level = this.levels[this.level.nextLevel];
    this.currentScene = this.level.scenes[0];
  }

  gameLoop() {
    setInterval(() => this.currentScene.act(), 0);
  }
}
