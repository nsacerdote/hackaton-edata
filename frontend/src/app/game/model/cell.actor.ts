import { Actor } from './actor';
import { Pos } from './pos';
import { Size } from './size';
import { Action } from './action';

export class CellActor extends Actor {

  constructor(initPos: Pos, public isGood: boolean, actions: Array<Action>, private clickListener = pos => []) {
    super(
      initPos,
      new Size(75, 75),
      isGood ? '/assets/images/good-cell.png' : '/assets/images/bad-cell.png',
      actions,
      'CELL_ACTOR'
    );
    this.animationClass = 'pulse quick infinite';
  }

  onClicked() {
    this.actions.push.apply(this.actions, this.clickListener(this.pos));
  }

}
