import {DomainCommand} from '../../../../projects/command-bus/src/lib/command';
import {LoadAllUsersCommandHandler} from './load-all-users.command-handler';

export class LoadAllUsersCommand extends DomainCommand {
  handlerClass = LoadAllUsersCommandHandler;
}
