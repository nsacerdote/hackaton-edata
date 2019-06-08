import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-next-scene-button',
  templateUrl: './next-scene-button.component.html',
  styleUrls: ['./next-scene-button.component.scss']
})
export class NextSceneButtonComponent implements OnInit {
  @Output() nextSceneRequest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
