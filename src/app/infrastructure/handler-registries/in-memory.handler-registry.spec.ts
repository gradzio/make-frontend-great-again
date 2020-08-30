import {InMemoryHandlerResolver} from './in-memory-handler-resolver.service';

describe('InMemoryHandlerRegistry', () => {
  it('should resolve registered handler', () => {
    const commandHandlerStub = { handle: (command: any) => {} };
    const commandStub = {type: 'type', payload: {}};
    const handlerRegistry = new InMemoryHandlerResolver({[commandStub.type]: commandHandlerStub});

    const actual = handlerRegistry.resolve(commandStub);

    expect(actual).toEqual(commandHandlerStub);
  });
});
