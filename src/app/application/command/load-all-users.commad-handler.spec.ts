import {TestBed} from '@angular/core/testing';
import {CommandBus} from '../../../../projects/command-bus/src/lib/command.bus';
import {COMMAND_HANDLER_TOKEN} from '../../../../projects/command-bus/src/lib/command.handler.token';
import {CommandHandler} from '../../../../projects/command-bus/src/lib/command.handler';
import {LoadAllUsersCommandHandler} from './load-all-users.command-handler';
import {LoadAllUsersCommand} from './load-all-users.command';
import {UsersState} from '../../domain/users.state';
import {GETS_ALL_USERS_STUB_PROVIDER} from '../../domain/get-all-users.service.stub';
import {makeUserState} from '../../domain/users.state.spec';

describe('LoadAllUsersCommandHandler', () => {
  let handler: CommandHandler;
  let userState: UsersState;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommandBus,
        { provide: COMMAND_HANDLER_TOKEN, useClass: LoadAllUsersCommandHandler, multi: true },
        { provide: UsersState, useFactory: (getsAllUsers) => makeUserState([], getsAllUsers), deps: ['GetsAllUsers'] },
        GETS_ALL_USERS_STUB_PROVIDER
      ]
    });
    handler = TestBed.inject(LoadAllUsersCommandHandler);
    userState = TestBed.inject(UsersState);
  });
  it('should handle', () => {
    spyOn(userState, 'loadAllUsers');

    handler.handle(new LoadAllUsersCommand());

    expect(userState.loadAllUsers).toHaveBeenCalled();
  });
});
