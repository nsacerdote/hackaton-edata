import {Optional} from '@angular/core';

export class Dialog {
  constructor(public text: string, public audioFile: string, public faceFile: string, public promptUser: boolean = false) {
  }
}
