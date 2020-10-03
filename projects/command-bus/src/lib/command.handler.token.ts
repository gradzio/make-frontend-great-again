import { InjectionToken } from '@angular/core';
import { CommandHandler } from './command.handler';

export const COMMAND_HANDLER_TOKEN = new InjectionToken<CommandHandler[]>('COMMAND_HANDLER');
