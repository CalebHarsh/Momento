/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
// ==== Testing the API endpoints =============================================
const Command = require('../controllers/userController');
const ko = require('nekodb');

// ---- Creating a new user ---------------------------------------------------
afterAll(() => setTimeout(() => ko.close(), 2000));
describe('Using commands to access the database', () => {
  afterEach(() => Command.logIn('joe@dude.com', 'Password123')
    .then((user) => {
      if (user.albums.length) {
        return Command.removeAlbum(user._id, user.albums[0])
          .then(userAl => userAl.delete());
      }
      return user.delete();
    }));

  test('Should create a new user named Joe Dude', () => {
    expect.assertions(1);
    return Command.signUp({
      name: 'Joe Dude',
      email: 'joe@dude.com',
      password: 'Password123',
    })
      .then(user => expect(user._id).toBeDefined());
  });

  describe('Joe Dude Interacting with Database', () => {
    beforeEach(() => Command.signUp({
      name: 'Joe Dude',
      email: 'joe@dude.com',
      password: 'Password123',
    }));

    test('Login with Joe Dude', () => {
      expect.assertions(1);
      return Command.logIn('joe@dude.com', 'Password123')
        .then(user => expect(user._id).toBeDefined());
    });

    test('Add an Album to Joe Dude', () => {
      expect.assertions(1);
      return Command.logIn('joe@dude.com', 'Password123')
        .then(user => Command.addNewAlbum(user._id, 'Test Album 1', 'test_pic.jpg', 'This is a Test'))
        .then(user => expect(user.albums.length).toEqual(1));
    });

    test('Add a Picture to Album', () => {
      expect.assertions(1);
      return Command.logIn('joe@dude.com', 'Password123')
        .then(user => Command.addNewAlbum(user._id, 'Test Album 2', 'test_pic.jpg', 'This is a Test'))
        .then(user => Command.addNewPhoto(user._id, user.albums[0], 'Test Pic 1', 'test-pic.jpg'))
        .then(album => expect(album.photos.length).toEqual(1));
    });
  });
});
