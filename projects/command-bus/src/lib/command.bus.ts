import { Injectable } from '@angular/core';
import { DomainCommand } from './command';
import { TokenBasedCommandHandlerRegistry } from './token-based-command-handler-registry';
import { CommandHandler } from './command.handler';

export class CommandHandlerNotRegistered extends Error {
  message = 'Command handler was not registered';
  name = 'COMMAND_HANDLER_NOT_REGISTERED';
}

@Injectable()
export class CommandBus {
  constructor(private handlerResolver: TokenBasedCommandHandlerRegistry) {}

  dispatch(command: DomainCommand): void {
    const handler: CommandHandler = this.handlerResolver.resolve(command);
    if (!handler) {
      throw new CommandHandlerNotRegistered();
    }
    handler.handle(command);
  }
}
