import { TestBed } from '@angular/core/testing';
import { TokenBasedCommandHandlerRegistry } from './token-based-command-handler-registry';
import { COMMAND_HANDLER_TOKEN } from './command.handler.token';
import { StubCommandHandler } from './command.handler.stub';
import { StubCommand } from './command.stub';

describe('TokenBasedCommandHandlerRegistry', () => {
  let registry: TokenBasedCommandHandlerRegistry;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenBasedCommandHandlerRegistry,
        {
          provide: COMMAND_HANDLER_TOKEN,
          useClass: StubCommandHandler,
          multi: true
        }
      ]
    });
    registry = TestBed.inject(TokenBasedCommandHandlerRegistry);
  });

  it("should resolve given command to it's handler", () => {
    const command = new StubCommand({ foo: 'baz' });
    const handler = registry.resolve(command);
    expect(handler instanceof StubCommandHandler).toBe(true);
  });
});
