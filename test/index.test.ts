import { expect } from 'chai';
import { Router } from '../src/router';

describe('Router', () => {
    let router: Router;

    beforeEach(() => {
        router = new Router();
    });

    it('should navigate to a route', () => {
        router.navigate('/about');
        expect(window.location.hash).to.equal('#/about');
    });

    it('should execute route handler when navigating', (done) => {
        router.addRoute('/about', () => {
            expect(true).to.be.true;
            done();
        });
        router.navigate('/about');
    });
});
