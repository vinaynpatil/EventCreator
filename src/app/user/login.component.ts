import { Component } from '@angular/core'

@Component({
    templateUrl: "./login.component.html"
})

export class LoginComponent {
    userName
    passwords
    login(formValues) {
        console.log(formValues);
    }
}