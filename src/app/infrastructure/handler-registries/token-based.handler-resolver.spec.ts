import {async, TestBed} from '@angular/core/testing';
import {TokenBaseHandlerResolver} from './token-based.handler-resolver';
import {AbstractCommandHandler} from '../../application/handlers/handler';

class TestCommandHandler extends AbstractCommandHandler<TestCommand> {
  protected readonly command = TestCommand;
  handle(command: TestCommand): void {}
}

class AnotherCommandHandler extends AbstractCommandHandler<AnotherCommand> {
  protected readonly command = AnotherCommand;
  handle(command: AnotherCommand): void {}
}

class TestCommand {}
class AnotherCommand {}

describe('TokenBasedHandlerRegistry', () => {
  let handlerResolver: TokenBaseHandlerResolver<any>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'COMMAND_HANDLER', useClass: AnotherCommandHandler, multi: true },
        { provide: 'COMMAND_HANDLER', useClass: TestCommandHandler, multi: true },
        TokenBaseHandlerResolver
      ]
    });
    handlerResolver = TestBed.get(TokenBaseHandlerResolver);
  }));
  it('should resolve registered handler', () => {

    const actual = handlerResolver.resolve(new TestCommand());

    expect(actual).toBeInstanceOf(TestCommandHandler);
  });
});
