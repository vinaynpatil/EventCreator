import { Injectable } from '@angular/core'
import { ISession } from '../shared';

@Injectable()
export class VoterService {

    deleteVoter(session: ISession, username: string) {
        session.voters = session.voters.filter(each => each !== username)
    }

    addVoter(session: ISession, username: string) {
        session.voters.push(username);
    }

    userHasVoted(session: ISession, username: string) {
        return session.voters.indexOf(username) != -1;
        // return session.voters.some(each => each === username);
    }

}