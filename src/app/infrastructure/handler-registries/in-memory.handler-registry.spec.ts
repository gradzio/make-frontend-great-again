import {InMemoryHandlerRegistry} from './in-memory.handler-registry';

describe('InMemoryHandlerRegistry', () => {
  it('should resolve registered handler', () => {
    const handlerRegistry = new InMemoryHandlerRegistry();
    const commandStub = {type: 'type', payload: {}};
    const commandHandlerStub = { handle: (command: any) => {} };
    handlerRegistry.registerHandler(commandStub, commandHandlerStub);

    const actual = handlerRegistry.resolveHandler(commandStub);

    expect(actual).toEqual(commandHandlerStub);
  });
});
