import { Actor } from './actor';
import { Pos } from './pos';
import { Size } from './size';
import { AnimationAction } from './bounce-animation.action';

export class IronmanGloveActor extends Actor {
  constructor() {
    super(
      new Pos(30, 200),
      new Size(100, 100),
      '/assets/images/ironman-gauntlet.png',
      [new AnimationAction('slideInLeft quick')],
      'IRONMAN_GLOVE_ACTOR'
    );
  }

  onClicked() {}
}
