export interface CommandHandler<T> {
  handle(command: T): void;
}

export abstract class AbstractCommandHandler<T> {
  protected abstract readonly command;

  abstract handle(command: T): void;

  canHandle(command: T): boolean {
    return command instanceof this.command;
  }
}
