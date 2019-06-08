import {User} from '../../models/user.model';
import {AuthenticationService} from '../../services/authentication.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Dialog } from '../model/dialog';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit, OnChanges {

  loggedUser: User;
  @Output() nextSceneRequest = new EventEmitter();
  @Input() dialogs: Array<Dialog> = [];

  currentDialog: Dialog = null;
  showNextSceneButton: Boolean = false;

  constructor(private authenticationService: AuthenticationService) {
    this.loggedUser = authenticationService.getLoggedUser();
  }

  ngOnInit() {
    this.initDialogs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initDialogs();
  }

  private initDialogs() {
    if (this.dialogs.length > 0) {
      this.currentDialog = this.dialogs[0];
    }
  }

  nextDialog() {
    const nextIndex = this.dialogs.indexOf(this.currentDialog) + 1;
    if(nextIndex == this.dialogs.length){
      this.showNextSceneButton = true;
    }
    this.currentDialog = this.dialogs[nextIndex];
  }

  loadNextScene(){
    this.showNextSceneButton = false;
    this.nextSceneRequest.emit();
  }

}
