import {EventType} from './event-type.model';

export interface Event {
  type: EventType;
  date: Date;
}
