import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { SessionListComponent, VoterService, UpvoteComponent } from '.'
import { ISession, DurationPipe } from '../.'
import { AuthService } from '../../user/auth.service'
import { By } from '@angular/platform-browser'
import { CollapsibleWellComponent } from 'src/app/common';

describe('SessionListComponent', () => {
    // Fixture is a wrapper around the component.
    // DebugElement is a wrapper around the native element.
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'Vinay' }
        };
        let mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [

            ],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                {
                    provide: AuthService,
                    useValue: mockAuthService
                },
                {
                    provide: VoterService,
                    useValue: mockVoterService
                }
            ],
            schemas: []
        })
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('Initial Display', () => {
        it('should have the correct session title', () => {
            component.sessions = [{ id: 1, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['vinay', 'vinaynp'] }];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 1;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            // Alternative way using debugElement, which might be helpful when finding an element by its diretive,etc
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        })
    })
})