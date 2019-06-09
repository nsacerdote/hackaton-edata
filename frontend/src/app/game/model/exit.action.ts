import {Action} from './action';
import {Actor} from './actor';

export class ExitAction extends Action {

  constructor(private onFinish = () => {}) {
    super(100, false);
  }

  doAction(actor: Actor, percentage: number) {
    if (!this.isComplete) {
      actor.exitScene();
      this.onFinish();
    }
  }

}
