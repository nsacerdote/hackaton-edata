export class Dialog {
  constructor(public text: string,
              public audioFile: string,
              public faceFile: string,
              public promptUser: boolean = false,
              public nextSceneYes: number = null,
              public nextSceneNo: number = null,
              public nextScene: number = null
              ) {
  }
}
