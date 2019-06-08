import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Actor } from '../../model/actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  @Input() actor: Actor;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    console.log(this.actor);
    this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url(' + this.actor.image + ')');
    this.renderer.setStyle(this.el.nativeElement, 'bottom', this.actor.pos.y + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'left', this.actor.pos.x + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'width', this.actor.size.width + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'height', this.actor.size.height + 'px');
  }

}
