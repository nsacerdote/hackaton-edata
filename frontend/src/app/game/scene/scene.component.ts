import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Actor } from '../model/actor';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @Input() background: string;
  @Input() actors: Array<Actor>;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url(' + this.background + ')');
  }

}
