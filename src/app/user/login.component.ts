import { Component } from '@angular/core'

import { AuthService } from './auth.service'

import { Router } from '@angular/router'

@Component({
    templateUrl: "./login.component.html",
    styles: [
        `
        em{
            color:red;
            float:right;
            padding-left:10px;
        }
        `
    ]
})

export class LoginComponent {
    userName
    passwords
    mouseOverLogin

    constructor(private authService: AuthService, private router: Router) { }


    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['/events']);
    }
}