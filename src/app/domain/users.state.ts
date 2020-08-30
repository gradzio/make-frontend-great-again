import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {UserModel} from './user.model';
import {GetsAllUsers} from './users.service';
import {Inject, Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Dispatcher} from '../application/dispatcher';

export interface UsersStateModel {
  allUsers: UserModel[];
  count: number;
}

@Injectable()
export class UsersState {
  private subject: BehaviorSubject<UsersStateModel> = new BehaviorSubject({allUsers: [], count: 0});
  constructor(
    private initialState: UsersStateModel,
    @Inject('GetsAllUsers') private getsAllUsers: GetsAllUsers,
  ) {
    this.subject.next({...initialState});
  }

  loadAllUsers(command: any): void {
    this.getsAllUsers.getAll()
      .pipe(
        tap(users => this.subject.next({allUsers: [...users], count: users.length}))
      ).subscribe();
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
