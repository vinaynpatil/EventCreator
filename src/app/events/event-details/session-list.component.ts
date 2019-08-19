import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[] = [];

    constructor(private auth: AuthService, private voterService: VoterService) { }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === "name" ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)
        }
    }

    filterSessions(filter) {
        if (filter !== 'all') {
            this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filter);
        }
        else {
            this.visibleSessions = this.sessions.slice(0);
        }
    }

    userHasVoted(session) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            let x = this.visibleSessions;
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
        }

        if (this.sortBy === "votes") {
            this.visibleSessions.sort(sortByVotesDesc);
        }

    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1;
    }
    else if (s1.name === s2.name) {
        return 0;
    }
    else {
        return -1;
    }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}