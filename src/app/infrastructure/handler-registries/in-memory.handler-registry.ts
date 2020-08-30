import {CommandHandler, HandlerRegistry} from '../../application/handler-registry';
import {Injectable} from '@angular/core';

@Injectable()
export class InMemoryHandlerRegistry implements HandlerRegistry {
  private handlers = {};

  resolveHandler(command: any): CommandHandler {
    return this.handlers[command.type];
  }

  registerHandler(command: any, handler: CommandHandler): void {
    this.handlers[command.type] = handler;
  }
}
