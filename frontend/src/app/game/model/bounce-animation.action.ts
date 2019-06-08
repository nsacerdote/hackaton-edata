import {Actor} from './actor';
import {Action} from './action';

export class BounceAnimationAction extends Action {

  constructor(iterations: number) {
    super(iterations * 800, false);
  }

  // play(actor: Actor) {
  //   actor.animationClass = 'bounce';
  //   setTimeout(() => {
  //     this.isComplete = true;
  //     actor.animationClass = null;
  //   }, this.duration);
  // }

  doAction(actor: Actor, percentage: number) {
    if (!this.isComplete) {
      console.log('!complete');
      actor.animationClass = 'bounce';
    } else {
      actor.animationClass = null;
    }
  }


}
