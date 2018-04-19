/* eslint no-undef:0 */


// ==== Testing the API endpoints =============================================
import endpoint from '../client/src/utils/API';

// ---- Creating a new user ---------------------------------------------------

describe('Creating a new user', () => {
  it('should console.log() the response', done =>
    endpoint.createNewUser({
      name: 'Joe Dude',
      email: 'joe@dude.com',
      password: 'Password123',
    }).then((response) => {
      expect(response.data).toBeDefined();
      done();
    }));
});
