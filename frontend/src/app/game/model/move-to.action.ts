import {Action} from './action';
import {Actor} from './actor';
import { Pos } from './pos';

export class MoveToAction extends Action {

  constructor(private target: Pos, public duration: number) {
    super(duration, false);
  }

  doAction(actor: Actor, percentage: number) {
    if (!this.isComplete) {
      const posDiffX = this.target.x - this.intialPos.x;
      const posDiffY = this.target.y - this.intialPos.y;
      actor.pos.x = actor.pos.x + percentage * posDiffX;
      actor.pos.y = actor.pos.y + percentage * posDiffY;
    } else {
      actor.pos.x = this.target.x;
      actor.pos.y = this.target.y;
    }
  }
}
