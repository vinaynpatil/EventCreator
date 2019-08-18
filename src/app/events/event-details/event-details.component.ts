import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared';

@Component({
    templateUrl: 'event-details.component.html',
    styles: [`
    .container{padding-left:20px;padding-right:20px;}
    .event-image{height:100px;}
    a {
        cursor:pointer;
    }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode = false;
    filterBy: string = "all";
    sortBy: string = "name";
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((param: Params) => { // Can be relaced with this.route.params.forEach((param:Params) => {
            this.event = this.eventService.getEvent(+param['id']);
            this.addMode = false;
        })
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(session => session.id)) + 1;
        session.id = nextId;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

}