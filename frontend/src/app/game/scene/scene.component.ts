import {Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import { Actor } from '../model/actor';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit, OnChanges {

  @Input() background: string;
  @Input() actors: Array<Actor>;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.setBackground();
  }

  setBackground(){
    this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url(' + this.background + ')');

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setBackground();
  }



}
