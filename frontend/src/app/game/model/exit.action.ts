import {Action} from './action';
import {Actor} from './actor';

export class ExitAction extends Action {

  constructor() {
    super(100, false);
  }

  doAction(actor: Actor, percentage: number) {
    if (!this.isComplete) {
      actor.exitScene();
    }
  }

}
