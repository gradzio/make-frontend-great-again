import {UserModel} from './user.model';
import {Url} from './url.vo';

describe('UserModel', () => {
  it('should create', () => {
    const login = 'login';
    const avatarUrl = 'https://avatars0.githubusercontent.com/u/1?v=4';
    const model = new UserModel(login, new Url(avatarUrl));

    expect(model).toEqual(jasmine.objectContaining({
      login,
      avatarUrl
    }));
  });
});
