import {Actor} from './actor';
import { Pos } from './pos';

export abstract class Action {

  protected lastTime: number;
  protected remainingDuration: number;
  protected intialPos;

  protected constructor(public duration: number = Number.MAX_VALUE, public isComplete: boolean) {
    this.remainingDuration = duration;
  }

  play(actor: Actor) {
    if (!this.intialPos) {
      this.intialPos = new Pos(actor.pos.x, actor.pos.y);
    }

    if (!this.lastTime) {
      this.lastTime = Date.now();
    }

    if (this.remainingDuration > 0) {
      const delta = Date.now() - this.lastTime;
      this.remainingDuration = this.remainingDuration - delta;
      const durationPercentage = delta / this.duration;
      this.doAction(actor, durationPercentage);
    } else {
      this.isComplete = true;
      this.doAction(actor, 0);
    }

    this.lastTime = Date.now();
  }

  abstract doAction(actor: Actor, percentage: number);

}
