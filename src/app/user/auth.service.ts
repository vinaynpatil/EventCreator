import { Injectable } from '@angular/core'

import { IUser } from './user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
    currentUser: IUser

    constructor(private http: HttpClient) { }

    loginUser(userName: string, password: string) {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        const loginInfo = { username: userName, password };
        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user'];
            }))
            .pipe(catchError(err => {
                return of(false);
            }));
        // this.currentUser = {
        //     id: 1,
        //     userName,
        //     firstName: 'Vinay',
        //     lastName: 'Patil'
        // }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: any, lastName: any) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                if (data instanceof Object) {
                    this.currentUser = <IUser>data;
                }
            }))
            .subscribe()
    }

    logout() {
        this.currentUser = undefined;
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post('/api/logout', {}, options);
    }
}