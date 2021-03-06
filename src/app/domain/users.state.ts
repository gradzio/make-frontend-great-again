import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {UserModel} from './user.model';
import {GetsAllUsers} from './users.service';
import {Inject, Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';

export interface UsersStateModel {
  allUsers: UserModel[];
  count: number;
}

@Injectable()
export class UsersState {
  private subject: BehaviorSubject<UsersStateModel> = new BehaviorSubject({allUsers: [], count: 0});
  constructor(
    private initialState: UsersStateModel,
  ) {
    this.subject.next({...initialState});
  }

  loadAllUsers(users): void {
    this.subject.next({allUsers: [...users], count: users.length});
  }

  get allUsers$(): Observable<UserModel[]> {
    return this.subject.asObservable()
      .pipe(map(state => state.allUsers));
  }

  get count$(): Observable<number> {
    return this.subject.asObservable()
      .pipe(map(state => state.count));
  }
}
