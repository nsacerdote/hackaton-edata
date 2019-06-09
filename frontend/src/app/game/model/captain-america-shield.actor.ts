import { Actor } from './actor';
import { Pos } from './pos';
import { Size } from './size';
import {MoveToAction} from './move-to.action';
import {WaitAction} from './wait.action';

export class CaptainAmericaShieldActor extends Actor {
  constructor() {
    super(
      new Pos(800, 1000),
      new Size(80, 80),
      '/assets/images/captain-america-shield.png',
      [
        new WaitAction(3000),
        new MoveToAction(new Pos(800, 350), 100)
      ],
      'CAPTAIN_AMERICA_SHIELD_ACTOR'
    );
  }

  onClicked() {}
}
