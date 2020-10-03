import { DomainCommand } from './command';
import { StubCommandHandler } from './command.handler.stub';
import { CommandHandler } from './command.handler';

export class StubCommand extends DomainCommand {
  handlerClass = StubCommandHandler;
  constructor(public payload: { foo: string }) {
    super();
  }
}

export class StubCommandWithoutHandler extends DomainCommand {
  handlerClass = UnregisteredHandler;
  constructor(public payload: { foo: string }) {
    super();
  }
}

class UnregisteredHandler implements CommandHandler {
  handle() {}
}
