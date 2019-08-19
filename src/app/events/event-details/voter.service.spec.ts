import { VoterService } from '.';
import { ISession } from '..';
import { Observable, of } from 'rxjs';

describe('VoterService', () => {
    let voterService: VoterService, mockHttp;
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {

            // Mocking the return value of delete to be an observable.
            mockHttp.delete.and.returnValue(of(false));

            const session = { id: 5, voters: ['vinay', 'vinaynp'] };
            voterService.deleteVoter(5, <ISession>session, 'vinay');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('vinaynp');
        });

        it('should call http.delete with the right URL', () => {

            mockHttp.delete.and.returnValue(of(false));

            const session = { id: 5, voters: ['vinay', 'vinaynp'] };
            voterService.deleteVoter(5, <ISession>session, 'vinay');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/5/sessions/5/voters/vinay');

        });
    });

    describe('addVoter', () => {
        it('should call http.post with the right params', () => {
            mockHttp.post.and.returnValue(of(false));

            const session = { id: 5, voters: ['vinay'] };
            voterService.addVoter(5, <ISession>session, 'vinaynp');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/5/sessions/5/voters/vinaynp', {}, jasmine.any(Object));
        });
    });
});
