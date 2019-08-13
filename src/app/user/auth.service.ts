import { Injectable } from '@angular/core'

import { IUser } from './user.model'

@Injectable()
export class AuthService {
    currentUser: IUser
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName,
            firstName: 'Vinay',
            lastName: 'Patil'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: any, lastName: any) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}