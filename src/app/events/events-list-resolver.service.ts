import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any>{

    constructor(private eventService: EventService) { }

    resolve() {
        // No need to subscribe here as its done automatically by angular (Because we are using resolve)
        return this.eventService.getEvents();
    }
}