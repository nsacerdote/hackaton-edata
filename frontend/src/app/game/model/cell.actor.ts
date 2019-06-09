import { Actor } from './actor';
import { Pos } from './pos';
import { Size } from './size';
import {Action} from './action';

export class CellActor extends Actor {

  public currentAction;

  constructor(initPos: Pos, public isGood: boolean, actions: Array<Action>) {
    super(initPos,
      new Size(75, 75),
      isGood ? '/assets/images/good-cell.png' : '/assets/images/bad-cell.png', actions, null);
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

}
