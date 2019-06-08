import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Dialog } from '../../model/dialog';
import { Howl } from 'howler';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnChanges {

  @Input() dialog: Dialog;
  dialogSound = null;

  constructor() { }

  ngOnInit() {
    this.playDialogSound();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.playDialogSound();
  }

  private playDialogSound() {
    if (this.dialogSound) {
      this.dialogSound.stop();
      this.dialogSound = null;
    }
    if (this.dialog.audioFile) {
      this.dialogSound = new Howl({
        src: [this.dialog.audioFile],
        volume: 1
      });
      this.dialogSound.play();
    }
  }

}
