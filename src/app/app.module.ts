import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

import { EventListComponent } from './events/events-list.component'

import { EventThumbnailComponent } from './events/event-thumbnail.component'

import { NavBarComponent } from './nav/navbar.component'

import { EventService } from './events/shared/event.service'

import { ToastrService } from './common/toastr.service'

import { EventDetailsComponent } from './events/event-details/event-details.component'

import { appRoutes } from './routes'

import { RouterModule } from '@angular/router'

import { CreateEventComponent } from './events/create-event.component'

import { Error404Component } from './errors/404.component'

import { EventRouteActivator } from './events/event-details/event-route-activator.serivice';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
