import { Pos } from './pos';
import { Size } from './size';

export class Actor {
  constructor(public pos: Pos, public size: Size, public image: string) {}
}
