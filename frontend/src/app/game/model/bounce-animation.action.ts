import {Action} from './action';
import {CellActor} from './cell.actor';

export class BounceAnimationAction extends Action {

  constructor(iterations: number) {
    super(iterations * 800, false);
  }

  doAction(actor: CellActor, percentage: number) {
    if (!this.isComplete) {
      actor.animationClass = 'bounce';
    } else {
      actor.isGood = !actor.isGood;
      actor.image = actor.isGood ? '/assets/images/good-cell.png' : '/assets/images/bad-cell.png';
      actor.animationClass = null;
    }
  }


}
