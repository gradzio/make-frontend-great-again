
export interface CommandHandler {
  handle(command: any): void;
}

export interface HandlerRegistry {
  registerHandler(command: any, CommandHandler): void;
  resolveHandler(command: any): CommandHandler;
}
