import {Injectable} from '@angular/core';

@Injectable()
export class Dispatcher {
  private handlers = {};
  dispatch(command: any): void {
    this.handlers[command.type](command);
  }

  registerHandler(commandType: string, handler: (command: any) => void): void {
    this.handlers[commandType] = handler;
  }
}
