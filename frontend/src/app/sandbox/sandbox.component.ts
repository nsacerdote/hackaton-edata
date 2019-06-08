import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    let sound = new Howl({
      src: ['assets/audio/ambient/flash.wav'],
      volume: 0.5
    });

    sound.play();
  }

  punch(){
    let sound = new Howl({
      src: ['assets/audio/sfx/punch1.wav']
    });

    sound.play();
  }

}
