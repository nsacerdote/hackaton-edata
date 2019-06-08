import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';
import {EventType} from '../../models/event-type.model';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  eventTypes: Array<EventType>;
  selectedDate: any;
  selectedEvent: string;
  invalidForm = false;
  datePickerConfig = {
    locale: 'ES',
    firstDayOfWeek: 'mo'
  }

  constructor(private eventService: EventService,
              private router: Router) {
    this.eventTypes = eventService.getEventTypes();
  }

  ngOnInit() {
  }

  submit() {
    if (this.selectedDate && this.selectedEvent) {
      this.eventService.addEvent({date: this.selectedDate._d, type: this.selectedEvent});
      this.router.navigate(['admin']);
      this.invalidForm = false;
    } else {
      this.invalidForm = true;
    }
  }

  cancel() {
    this.router.navigate(['admin']);
  }
}
