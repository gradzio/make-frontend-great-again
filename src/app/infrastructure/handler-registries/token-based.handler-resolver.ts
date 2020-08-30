import {HandlerResolver} from '../../application/handler-resolver';
import {Injectable, Injector} from '@angular/core';
import {AbstractCommandHandler, CommandHandler} from '../../application/handlers/handler';

@Injectable()
export class TokenBaseHandlerResolver<T> implements HandlerResolver<T> {
  constructor(private injector: Injector) {}
  resolve(command: T): CommandHandler<T> {
    return this.injector.get('COMMAND_HANDLER')
      .find((commandHandler: AbstractCommandHandler<T>) => commandHandler.canHandle(command));
  }
}
