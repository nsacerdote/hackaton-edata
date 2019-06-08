import { Actor } from './actor';
import { Pos } from './pos';
import { Size } from './size';

export class CellActor extends Actor {
  constructor(initPos: Pos, public isGood: boolean) {
    super(initPos,
      new Size(75, 75),
      isGood ? '/assets/images/good-cell.png' : '/assets/images/bad-cell.png');
  }

  onClicked() {
    this.isGood = !this.isGood;
    this.image = this.isGood ? '/assets/images/good-cell.png' : '/assets/images/bad-cell.png';
  }
}
