import {Action} from './action';
import {Actor} from './actor';

export class RunAction extends Action {

  constructor(private run = () => {}) {
    super(0, false);
  }

  doAction(actor: Actor, percentage: number) {
    if (this.isComplete) {
      this.run();
    }
  }

}
