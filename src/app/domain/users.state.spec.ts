import {UsersState, UsersStateModel} from './users.state';
import {GetsAllUsers} from './users.service';
import {EMPTY, of} from 'rxjs';
import {async, TestBed} from '@angular/core/testing';
import {UserModel} from './user.model';
import {Dispatcher} from '../application/dispatcher';

describe('UsersState', () => {
  let getAllUsers: GetsAllUsers;

  const makeUsersStub = (count: number): UserModel[] =>
    Array(count)
      .map((current: number) => ({
        login: `login${current}`,
        avatarUrl: {
          url: `https://image.com/image${current}.jpg`
        }
      }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'GetsAllUsers', useValue: {
            getAll: () => EMPTY
          }
        }
      ]
    }).compileComponents();

    getAllUsers = TestBed.get('GetsAllUsers');
  }));

  const makeUserState = (usersStub: UserModel[], getsAllUsers: GetsAllUsers): UsersState =>
    new UsersState({allUsers: usersStub, count: usersStub.length}, getsAllUsers, new Dispatcher());

  it('should init state', done => {
    const state = makeUserState(makeUsersStub(0), getAllUsers);
    // state.allUsers$
    //   .subscribe(users => {
    //     expect(users).toEqual([]);
    //     expect(users.length).toEqual(0);
    //     done();
    //   }
    // );
    //
    // state.count$
    //   .subscribe(count => {
    //     expect(count).toEqual(0);
    //     done();
    //   });
  });

  // it('should get all users', done => {
  //   const usersStub: UserModel[] = makeUsersStub(3);
  //   const state = makeUserState(usersStub, getAllUsers);
  //   const getAllUsersSpy = spyOn(getAllUsers, 'getAll')
  //     .and.returnValue(of(usersStub));
  //
  //   state.loadAllUsers();
  //
  //   expect(getAllUsersSpy).toHaveBeenCalled();
  //   state.allUsers$
  //     .subscribe(users => {
  //       expect(users).toEqual(usersStub);
  //       done();
  //     }
  //   );
  //
  //   state.count$
  //     .subscribe(count => {
  //       expect(count).toEqual(usersStub.length);
  //       done();
  //     });
  // });
  //
  // it('should override all users', done => {
  //   const usersStub: UserModel[] = makeUsersStub(2);
  //   const state = makeUserState(usersStub, getAllUsers);
  //   const newUsersStub: UserModel[] = makeUsersStub(3);
  //
  //   const getAllUsersSpy = spyOn(getAllUsers, 'getAll')
  //     .and.returnValue(of(newUsersStub));
  //
  //   state.loadAllUsers();
  //
  //   expect(getAllUsersSpy).toHaveBeenCalled();
  //   state.allUsers$
  //     .subscribe(users => {
  //         expect(users).toEqual(newUsersStub);
  //         done();
  //       }
  //     );
  //
  //   state.count$
  //     .subscribe(count => {
  //       expect(count).toEqual(newUsersStub.length);
  //       done();
  //     });
  // });
});
