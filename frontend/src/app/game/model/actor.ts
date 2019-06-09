import { Pos } from './pos';
import { Size } from './size';
import {Action} from './action';

export class Actor {

  public exitRequest = false;
  protected currentAction;
  public animationClass: string = null;

  constructor(public pos: Pos, public size: Size, public image: string, public actions: Array<Action>, public type: string) {
    if (actions.length !== 0) {
      this.currentAction = actions.shift();
    }
  }

  onClicked() {
  }

  act() {
    if (this.currentAction) {
      if (!this.currentAction.isComplete) {
        this.currentAction.play(this);
      } else {
        this.currentAction = this.actions.shift();
      }
    }
  }

  exitScene() {
    this.exitRequest = true;
  }
}
