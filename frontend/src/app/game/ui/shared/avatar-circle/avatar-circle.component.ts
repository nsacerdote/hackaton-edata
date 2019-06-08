import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-avatar-circle',
  templateUrl: './avatar-circle.component.html',
  styleUrls: ['./avatar-circle.component.scss']
})
export class AvatarCircleComponent implements OnInit, OnChanges {

  @Input() image: string;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url(' + this.image + ')');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url(' + this.image + ')');
  }

}
