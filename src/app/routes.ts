import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    EventListResolver,
    CreateSession
} from './events/index';

export const appRoutes: Routes = [
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSession },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'src/app/user/user.module#UserModule' }
];
