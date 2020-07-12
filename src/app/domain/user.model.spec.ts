import {UserModel} from './user.model';

describe('UserModel', () => {
  it('should create', () => {
    const login = 'login';
    const avatarUrl = 'https://avatars0.githubusercontent.com/u/1?v=4';
    const model = new UserModel(login, avatarUrl);

    expect(model).toEqual(jasmine.objectContaining({
      login,
      avatarUrl
    }));
  });

  it('should throw on invalid avatar', () => {
    expect(() => new UserModel('login', 'avatarUrl'))
      .toThrowError('Avatar url does not start with https');
  });
});
