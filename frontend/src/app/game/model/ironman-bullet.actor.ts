import { Actor } from './actor';
import { Pos } from './pos';
import { Size } from './size';
import { MoveToAction } from './move-to.action';
import { ExitAction } from './exit.action';

export class IronmanBulletActor extends Actor {
  constructor(initPos: Pos, target: Pos) {
    super(
      initPos,
      new Size(75, 75),
      '/assets/images/fireball.png',
      [new MoveToAction(target, 250), new ExitAction()],
      'IRONMAN_BULLET_ACTOR'
    );
    this.animationClass = 'rollOut quick infinite';
  }

  onClicked() {}
}
