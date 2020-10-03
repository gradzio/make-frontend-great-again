import {CommandHandler} from '../../../../projects/command-bus/src/lib/command.handler';
import {LoadAllUsersCommand} from './load-all-users.command';
import {Inject, Injectable} from '@angular/core';
import {UsersState} from '../../domain/users.state';
import {GetsAllUsers} from '../../domain/users.service';

@Injectable({ providedIn: 'root' })
export class LoadAllUsersCommandHandler implements CommandHandler {
  constructor(private usersState: UsersState, @Inject('GetsAllUsers') private getsAllUsers: GetsAllUsers,) {
  }
  handle(command: LoadAllUsersCommand): void {
    // this.usersState.loadAllUsers();
    this.getsAllUsers.getAll();
  }

}
