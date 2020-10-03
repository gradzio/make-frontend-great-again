import { HasPayload } from './has-payload';
import { Class } from './class';
import { CommandHandler } from './command.handler';

export abstract class DomainCommand implements HasPayload {
  abstract handlerClass: Class<CommandHandler>;
  payload: object;
}
