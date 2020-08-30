
export interface CommandHandler {
  handle(command: any): void;
}

export interface HandlerResolver {
  resolve(command: any): CommandHandler;
}
