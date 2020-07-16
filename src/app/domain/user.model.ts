import {Url} from './url.vo';

export class UserModel {
  constructor(public readonly login: string, public readonly avatarUrl: Url) {
  }
}
