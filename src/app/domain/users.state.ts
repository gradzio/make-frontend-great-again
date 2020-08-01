import {Observable, of} from 'rxjs';
import {UserModel} from './user.model';

export class UsersState {
  constructor(private initialState: any) {}

  get allUsers$(): Observable<UserModel[]> {
    return of(this.initialState.allUsers);
  }
}
