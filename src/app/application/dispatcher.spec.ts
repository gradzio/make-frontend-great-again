import {async, TestBed} from '@angular/core/testing';
import {Dispatcher} from './dispatcher';
import {UsersState} from '../domain/users.state';
import {makeUsersStub, makeUserState} from '../domain/users.state.spec';
import {GetsAllUsers} from '../domain/users.service';
import {GETS_ALL_USERS_STUB_PROVIDER} from '../domain/get-all-users.service.stub';
import {InMemoryHandlerResolver} from '../infrastructure/handler-registries/in-memory-handler-resolver.service';

describe('Dispatcher', () => {
  let dispatcher: Dispatcher;
  let userState: UsersState;

  const commandStub = {
    type: 'LoadAllUsers',
    payload: {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        Dispatcher,
        GETS_ALL_USERS_STUB_PROVIDER,
        {
          provide: UsersState,
          useFactory: (getsAllUsers: GetsAllUsers) => makeUserState(makeUsersStub(0), getsAllUsers),
          deps: ['GetsAllUsers']
        },
        {
          provide: 'HANDLER_RESOLVER',
          useFactory: (userStateDep: UsersState) => new InMemoryHandlerResolver({
            [commandStub.type]: {
                handle: (command: any): void => { userStateDep.loadAllUsers(command); }
              }
            }),
          deps: [UsersState]
        }
      ]
    });

    dispatcher = TestBed.inject(Dispatcher);
    userState = TestBed.inject(UsersState);
  }));

  it('should dispatch to handler', () => {
    const handlerSpy = spyOn(userState, 'loadAllUsers');

    dispatcher.dispatch(commandStub);

    expect(handlerSpy).toHaveBeenCalledWith(commandStub);
  });
});
