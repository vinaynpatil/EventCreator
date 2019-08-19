import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    // This class is now has been replaced by resolver. Keeping this file active for reference.
    constructor(private events: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.events.getEvent(+route.params['id']);

        if (!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}