import { Actor } from './actor';

export class Scene {
  constructor(public background: string, public actors: Array<Actor>) {}
}