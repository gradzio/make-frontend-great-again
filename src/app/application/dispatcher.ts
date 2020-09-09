import {Inject, Injectable} from '@angular/core';
import {HandlerResolver} from './handler-resolver';

@Injectable()
export class Dispatcher {

  constructor(@Inject('HANDLER_RESOLVER') private handlerResolver: HandlerResolver<any>) {}

  dispatch(command: any): void {
    this.handlerResolver.resolve(command).handle(command);
  }
}
