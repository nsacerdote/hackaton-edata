import { Scene } from './scene';

export class Level {
  constructor(public nextLevel: string, public scenes: Array<Scene>) {}
}
