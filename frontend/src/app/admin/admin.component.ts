import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  events: Array<Event>;

  constructor(private router: Router,
              private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }

  ngOnInit() {}

  addNewEvent() {
    this.router.navigate(['admin', 'new-event']);
  }
}
