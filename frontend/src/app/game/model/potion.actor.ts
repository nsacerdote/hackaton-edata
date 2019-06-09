import { Actor } from './actor';
import { Pos } from './pos';
import { Size } from './size';
import { Action } from './action';
import { AnimationAction } from './bounce-animation.action';

export class PotionActor extends Actor {
  constructor(initPos: Pos, actions: Array<Action>) {
    super(
      initPos,
      new Size(150, 150),
      '/assets/images/potion.png',
      [new AnimationAction('zoomIn'), ...actions],
      'POTION_ACTOR'
    );
    this.animationClass = 'pulse';
  }

  onClicked() {}
}
