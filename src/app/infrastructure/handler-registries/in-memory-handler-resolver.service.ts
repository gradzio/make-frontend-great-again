import {CommandHandler, HandlerResolver} from '../../application/handler-resolver';
import {Injectable} from '@angular/core';

@Injectable()
export class InMemoryHandlerResolver implements HandlerResolver {
  constructor(private readonly handlers: {[key: string]: CommandHandler}) {}

  resolve(command: any): CommandHandler {
    return this.handlers[command.type];
  }
}
