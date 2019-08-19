import { SessionListComponent } from '.';
import { ISession } from '..';


describe('SessionListComponent', () => {
    let component: SessionListComponent, mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'session1', level: 'intermediate' },
                { name: 'session2', level: 'intermediate' },
                { name: 'session3', level: 'begineer' }
            ];
            component.filterBy = 'intermediate';
            component.eventId = 1;
            component.sortBy = 'name';

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2);
        });

        it('should sort the sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'session1', level: 'intermediate' },
                { name: 'session3', level: 'intermediate' },
                { name: 'session2', level: 'begineer' }
            ];
            component.filterBy = 'all';
            component.eventId = 1;
            component.sortBy = 'name';

            component.ngOnChanges();

            expect(component.visibleSessions[2].name).toBe('session3');
        });
    });
});
