import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

import { ToastrService } from './../common/toastr.service'

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm

  constructor(private authService: AuthService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    let firstName = new FormControl(
      this.authService.currentUser.firstName
    );
    let lastName = new FormControl(
      this.authService.currentUser.lastName
    );
    this.profileForm = new FormGroup({
      firstName,
      lastName
    })
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.toastrService.success("Updated the profile successfully!");
    this.router.navigate(['/events']);
  }

}
