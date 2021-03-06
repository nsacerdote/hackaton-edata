import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.buttonClick.emit();
  }
}
