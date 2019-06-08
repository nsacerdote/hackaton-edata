import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  @Output() nextSceneRequest = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setTimeout(
      () => this.nextSceneRequest.emit(),
      2000
    );
  }

}
