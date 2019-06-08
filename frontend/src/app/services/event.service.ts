import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Array<Event> = [];
  eventTypes = [
    {name: 'Quimio'}
  ];

  constructor() { }

  getEvents(): Array<Event> {
    return this.events;
  }

  addEvent(event) {
    this.events.push(event);
  }

  getEventTypes() {
    return this.eventTypes;
  }
}
