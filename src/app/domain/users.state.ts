import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {UserModel} from './user.model';
import {GetsAllUsers} from './users.service';
import {Inject, Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Dispatcher, Loadusers} from '../application/dispatcher';

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
    private dispatcher: Dispatcher
  ) {
    this.subject.next({...initialState});
    this.dispatcher.registerHandler(Loadusers.type, this.loadAllUsers);
    this.dispatcher.dispatch(new Loadusers());
  }

  loadAllUsers(command: Loadusers): void {
    console.log('aha');
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
