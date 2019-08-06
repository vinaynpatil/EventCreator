import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
  <h2>
    <event-list>
    </event-list>
  </h2>`
})
export class EventsAppComponent {
  title = 'EventCreator';
}
