import {Action} from './action';
import {Actor} from './actor';

export class WaitAction extends Action {

  constructor(duration?: number) {
    super(duration, false);
  }

  doAction(actor: Actor, percentage: number) {}

}
