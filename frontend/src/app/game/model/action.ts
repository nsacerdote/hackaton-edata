import {Actor} from './actor';

export class Action {

  constructor(public duration: number, public isComplete: boolean) {
  }

  play(actor: Actor) {
  }

}
