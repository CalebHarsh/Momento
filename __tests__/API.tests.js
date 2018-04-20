/* eslint no-undef:0 */
// ==== Testing the API endpoints =============================================
const Command = require('../controllers/userController');

// ---- Creating a new user ---------------------------------------------------
describe('Using commands to access the database', () => {
  test('should create a new user named Joe Dude', async () => {
    expect.assertions(1);
    return Command.signUp({
      name: 'Joe Dude',
      email: 'joe@dude.com',
      password: 'Password123',
    })
      .then(user => expect(user._id).toBeDefined());
  });

  test('login with Joe Dude', async () => {
    expect.assertions(1);
    return Command.logIn('joe@dude.com', 'Password123')
      .then(user => expect(user._id).toBeDefined());
  });

  test('delete User Joe Dude', async () => {
    expect.assertions(1);
    return Command.logIn('joe@dude.com', 'Password123')
      .then(user => user.delete())
      .then(deleteCount => expect(deleteCount).toEqual(1));
  });
});
