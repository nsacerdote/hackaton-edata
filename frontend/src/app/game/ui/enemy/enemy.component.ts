import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.scss']
})
export class EnemyComponent implements OnInit {

  health = 50;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.health = 100;
    }, 1000)
  }

}
