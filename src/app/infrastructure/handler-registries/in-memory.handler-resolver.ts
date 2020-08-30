import {HandlerResolver} from '../../application/handler-resolver';
import {Injectable} from '@angular/core';
import {CommandHandler} from '../../application/handlers/handler';

interface HasType {
  type: string;
}

@Injectable()
export class InMemoryHandlerResolver implements HandlerResolver<HasType> {
  constructor(private readonly handlers: {[key: string]: CommandHandler<HasType>}) {}

  resolve(command: HasType): CommandHandler<HasType> {
    return this.handlers[command.type];
  }
}
