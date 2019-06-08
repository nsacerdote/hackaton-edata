import { Actor } from './actor';
import { Dialog } from './dialog';

export class Scene {
  constructor(public background: string, public actors: Array<Actor>, public dialogs: Array<Dialog>) {}
}
