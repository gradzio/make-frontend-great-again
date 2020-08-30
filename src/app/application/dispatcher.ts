import Func = jasmine.Func;
import {Injectable} from '@angular/core';

// export interface Command {
//   type: string;
// }

export class Loadusers {
  static type = 'Load Users';
  get type(): string {
    return Loadusers.type;
  }
}

@Injectable()
export class Dispatcher {
  private handlers = {};
  dispatch(command: any): void {
    this.handlers[command.type](command);
  }

  registerHandler(commandType: string, handler: Func): void {
    this.handlers[commandType] = handler;
  }
}
