import { Component } from '@angular/core'

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <span [hidden]="!visible">
            <ng-content select="[well-body]"></ng-content>
        </span>
    </div>
    `,
    styles: [`

    `]
})

export class CollapsibleWellComponent {
    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}