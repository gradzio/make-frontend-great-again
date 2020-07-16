import {Url} from './url.vo';

describe('Url', () => {
  it('should create', () => {
    const url = new Url('https://someurl');

    expect(url.url).toEqual('https://someurl');
  });

  it('should throw on invalid url', () => {
    expect(() => new Url('invalidUrl'))
      .toThrowError('Url does not start with https');
  });
});
