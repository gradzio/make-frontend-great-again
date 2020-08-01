import {UsersState} from './users.state';

describe('UsersState', () => {
  it('should get all users', () => {
    const state = new UsersState({allUsers: []});

    state.allUsers$.subscribe(users =>
      expect(users.length).toEqual(0)
    );
  });
});
