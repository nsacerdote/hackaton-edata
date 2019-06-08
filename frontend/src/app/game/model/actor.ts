import { Pos } from './pos';
import { Size } from './size';
import {Action} from './action';

export class Actor {
  constructor(public pos: Pos, public size: Size, public image: string, public actions: Array<Action>, public animationClass: string) {}

  onClicked() {
  }

  act() {
  }
}
