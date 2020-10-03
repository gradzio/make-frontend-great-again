import { DomainCommand } from './command';

export interface CommandHandler {
  handle(command: DomainCommand): void;
}
