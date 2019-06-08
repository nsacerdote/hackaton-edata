import {Action} from './action';
import {Actor} from './actor';

export class MoveRightAction extends Action {

  constructor(duration: number) {
    super(duration, false);
  }

  play(actor: Actor) {
    actor.pos.x++;
    setTimeout(() => this.isComplete = true, this.duration);
  }

}
