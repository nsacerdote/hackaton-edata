import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-prompt-button',
  templateUrl: './prompt-button.component.html',
  styleUrls: ['./prompt-button.component.scss']
})
export class PromptButtonComponent implements OnInit {
  @Input() type: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }


}
