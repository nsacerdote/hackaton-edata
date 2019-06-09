import {Action} from './action';
import {CellActor} from './cell.actor';

export class AnimationAction extends Action {

  oldAnimationClass = 'NOT_INITIALIZED';

  constructor(private animationClass: string) {
    super(800, false);
  }

  doAction(actor: CellActor, percentage: number) {
    if (this.oldAnimationClass === 'NOT_INITIALIZED') {
      this.oldAnimationClass = actor.animationClass;
    }

    if (!this.isComplete) {
      actor.animationClass = this.animationClass;
    } else {
      if (actor.type === 'CELL_ACTOR' && this.animationClass === 'bounce') {
        actor.isGood = !actor.isGood;
        actor.image = actor.isGood ? '/assets/images/good-cell.png' : '/assets/images/bad-cell.png';
      }
      actor.animationClass = this.oldAnimationClass;
    }
  }

}
