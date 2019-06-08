import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ui-element',
  templateUrl: './ui-element.component.html',
  styleUrls: ['./ui-element.component.scss']
})
export class UiElementComponent implements OnInit {

  @Input() top: string;
  @Input() right: string;
  @Input() bottom: string;
  @Input() left: string;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'top', this.top);
    this.renderer.setStyle(this.el.nativeElement, 'right', this.right);
    this.renderer.setStyle(this.el.nativeElement, 'bottom', this.bottom);
    this.renderer.setStyle(this.el.nativeElement, 'left', this.left);
  }

}
