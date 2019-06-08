import {Action} from './action';
import {Actor} from './actor';

export class MoveRightAction extends Action {

  constructor(duration: number) {
    super(duration, false);
  }

  doAction(actor: Actor, percentage: number) {
    if (!this.isComplete) {
      actor.pos.x++;
    }
  }

}
