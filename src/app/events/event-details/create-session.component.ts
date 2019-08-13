import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISession } from '../shared';


@Component({
    templateUrl: './create-session.component.html',
    styles: [
        `
        em{
          color:red;
          float:right;
          padding-left:10px;
        }
        .error input, .error select, .error textarea{
          background-color:pink
        }
        .error ::-webkit-input-placeholder {color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :-ms-input-placeholder {color:#999;}
        `
    ]
})
export class CreateSession implements OnInit {
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    ngOnInit() {
        this.name = new FormControl("", Validators.required);
        this.presenter = new FormControl("", Validators.required);
        this.duration = new FormControl("", Validators.required);
        this.level = new FormControl("", Validators.required);
        this.abstract = new FormControl("", [Validators.required, Validators.maxLength(400)]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues) {
        let session: ISession = {
            id: undefined,
            voters: [],
            abstract: formValues.abstract,
            duration: +formValues.duration,
            level: formValues.level,
            name: formValues.name,
            presenter: formValues.presenter
        }

        console.log(session);
    }

}