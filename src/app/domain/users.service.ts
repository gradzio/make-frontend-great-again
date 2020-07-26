import {Observable} from 'rxjs';
import {UserModel} from './user.model';

export interface GetsAllUsers {
  getAll(): Observable<UserModel[]>;
}
