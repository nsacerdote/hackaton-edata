import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss']
})
export class HealthBarComponent implements OnInit {

  @Input() health = 100;

  constructor() { }

  ngOnInit() {
  }

}
