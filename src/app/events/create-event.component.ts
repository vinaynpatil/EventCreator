import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: './create-event.component.html',
    styles: [
        `
        em{
          color:red;
          float:right;
          padding-left:10px;
        }
        .error input{
          background-color:pink
        }
        .error ::-webkit-input-placeholder {color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :-ms-input-placeholder {color:#999;}
        `
    ]
})
export class CreateEventComponent {
    newEvent;
    isDirty = true;

    constructor(private route: Router, private eventService: EventService) { }

    showEvents() {
        this.route.navigate(['/events']);
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.route.navigate(['/events']);
        });
    }

    cancel() {
        this.route.navigate(['/events']);
    }
}
