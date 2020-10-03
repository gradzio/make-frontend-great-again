import { Inject, Injectable, Optional } from '@angular/core';
import { CommandHandlerRegistry } from './command.handler.registry';
import { CommandHandler } from './command.handler';
import { DomainCommand } from './command';
import { COMMAND_HANDLER_TOKEN } from './command.handler.token';

@Injectable()
export class TokenBasedCommandHandlerRegistry implements CommandHandlerRegistry {
  constructor(@Optional() @Inject(COMMAND_HANDLER_TOKEN) private handlers: CommandHandler[]) {}
  resolve(command: DomainCommand): CommandHandler {
    return this.handlers.find(handler => handler instanceof command.handlerClass);
  }
}
