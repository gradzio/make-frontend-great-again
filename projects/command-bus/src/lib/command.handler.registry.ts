import { CommandHandler } from './command.handler';
import { DomainCommand } from './command';

export interface CommandHandlerRegistry {
  resolve(command: DomainCommand): CommandHandler;
}
