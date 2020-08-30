import {CommandHandler} from './handlers/handler';

export interface HandlerResolver<T> {
  resolve(command: T): CommandHandler<T>;
}
