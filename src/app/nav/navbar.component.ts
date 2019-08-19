import { Component, OnInit } from '@angular/core';

import { AuthService } from './../user/auth.service';
import { ISession, EventService, IEvent } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styles: [`
      .nav.navbar-nav {
        font-size:15px;
      }
      #searchForm {
        margin-right:100px;
      }
      @media(max-width:1200px) {
        #searchForm {
          display:none
        }
      }
      li > a.active {
        color: #F97924;
      }
      `]
})

export class NavBarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];
  events: IEvent[] = [];

  constructor(private authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      });
  }

  searchSessions() {
    this.eventService.searchSessions(this.searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    );
  }
}
