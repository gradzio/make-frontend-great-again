export class UserModel {
  // https://avatars0.githubusercontent.com/u/1?v=4
  constructor(public readonly login: string, public readonly avatarUrl: string) {
    if (this.avatarUrl.indexOf('https://') !== 0) {
      throw Error('Avatar url does not start with https');
    }
  }
}
