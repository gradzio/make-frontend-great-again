import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../domain/user.model';
import {GITHUB_URL} from '../../app.config';
import { GetsAllUsers } from '../domain/users.service';

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService implements GetsAllUsers {

  constructor(private client: HttpClient, @Inject(GITHUB_URL) private githubUrl: string) { }

  getAll(): Observable<UserModel[]> {
    return this.client.get<UserModel[]>(this.githubUrl + '/users');
  }
}
