import { CommandBus, CommandHandlerNotRegistered } from './command.bus';
import { TestBed } from '@angular/core/testing';
import { StubCommandHandler } from './command.handler.stub';
import { StubCommand, StubCommandWithoutHandler } from './command.stub';
import { TokenBasedCommandHandlerRegistry } from './token-based-command-handler-registry';
import { COMMAND_HANDLER_TOKEN } from './command.handler.token';

describe('CommandBus', () => {
  let bus: CommandBus;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommandBus,
        TokenBasedCommandHandlerRegistry,
        { provide: COMMAND_HANDLER_TOKEN, useClass: StubCommandHandler, multi: true }
      ]
    });
    bus = TestBed.inject(CommandBus);
  });

  it('should call handle() of a given command handler when it was previously registered', () => {
    const commandHandler = TestBed.inject(COMMAND_HANDLER_TOKEN)[0];
    spyOn(commandHandler, 'handle');
    bus.dispatch(new StubCommand({ foo: 'bar' }));
    expect(commandHandler.handle).toHaveBeenCalled();
  });

  it('should throw an error while trying to dispatch a command which did not had a handler registered', () => {
    expect(() => bus.dispatch(new StubCommandWithoutHandler({ foo: 'bar' }))).toThrow(
      new CommandHandlerNotRegistered()
    );
  });
});
