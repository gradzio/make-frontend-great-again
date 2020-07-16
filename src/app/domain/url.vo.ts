export class Url {
  constructor(public readonly url: string) {
    if (this.url.indexOf('https://') !== 0) {
      throw Error('Url does not start with https');
    }
  }
}
