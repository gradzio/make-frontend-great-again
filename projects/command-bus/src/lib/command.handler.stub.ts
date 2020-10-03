import { CommandHandler } from './command.handler';
import { StubCommand } from './command.stub';
import { Injectable } from '@angular/core';

@Injectable()
export class StubCommandHandler implements CommandHandler {
  handle(command: StubCommand): void {}
}
