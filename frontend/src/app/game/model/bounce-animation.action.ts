import {Actor} from "./actor";
import {Action} from "./action";

export class BounceAnimationAction extends Action {

  constructor(duration: number) {
    super(duration, false);
  }

  play(actor: Actor) {
    actor.animationClass = 'bounce';
    setTimeout(() => {
      this.isComplete = true;
      actor.animationClass = null;
    }, this.duration);
  }


}
