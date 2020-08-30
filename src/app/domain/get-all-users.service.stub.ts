import {EMPTY} from 'rxjs';

export const GETS_ALL_USERS_STUB_PROVIDER = {
  provide: 'GetsAllUsers', useValue: {
    getAll: () => EMPTY
  }
};
