import { Scene } from './scene';

export class Level {
  constructor(public scenes: Array<Scene>, public nextLevel?: string, public nextPage?: string) {}
}
