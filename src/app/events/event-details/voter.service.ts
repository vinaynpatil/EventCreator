import { Injectable } from '@angular/core'
import { ISession } from '../shared';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class VoterService {

    constructor(private http: HttpClient) { }

    deleteVoter(eventId: number, session: ISession, username: string) {
        session.voters = session.voters.filter(each => each !== username)

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`

        // Subscribing here because we don't really care what it returns.
        this.http.delete(url)
            .pipe(catchError(this.handleError('deleteVoter')))
            .subscribe();

    }

    addVoter(eventId: number, session: ISession, username: string) {
        session.voters.push(username);

        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`

        // Subscribing here because we don't really care what it returns.
        this.http.post(url, {}, options)
            .pipe(catchError(this.handleError('addVoters')))
            .subscribe();
    }

    userHasVoted(session: ISession, username: string) {
        return session.voters.indexOf(username) != -1;
        // return session.voters.some(each => each === username);
    }

    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

}