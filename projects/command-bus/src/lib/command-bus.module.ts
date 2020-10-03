import { NgModule } from '@angular/core';
import { CommandBus } from './command.bus';
import { TokenBasedCommandHandlerRegistry } from './token-based-command-handler-registry';

@NgModule({
  providers: [CommandBus, TokenBasedCommandHandlerRegistry]
})
export class CommandBusModule {}
