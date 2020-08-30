import {CommandHandler} from './handler';
import {LoadAllusersCommand} from './load-all-users.command';

export class LoadAllUsersHandler implements CommandHandler<LoadAllusersCommand>
{
  canHandle(command: LoadAllusersCommand): boolean {
    return false;
  }

  handle(command: LoadAllusersCommand): void {
  }

}
