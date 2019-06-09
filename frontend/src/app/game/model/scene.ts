import { Actor } from './actor';
import { Dialog } from './dialog';

export class Scene {

  constructor(public background: string,
              public actors: Array<Actor>,
              public dialogs: Array<Dialog>,
              public nextScene: number = null) {}

  act() {
    this.actors.forEach(actor => actor.act());
    this.actors = this.actors.filter(a => !a.exitRequest);
  }
}
