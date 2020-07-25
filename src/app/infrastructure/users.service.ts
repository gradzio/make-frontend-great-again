import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../domain/user.model';
import {environment} from '../../environments/environment';
import {GITHUB_URL} from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private client: HttpClient, @Inject(GITHUB_URL) private githubUrl: string) { }

  getAll(): Observable<UserModel[]> {
    return this.client.get<UserModel[]>(this.githubUrl + '/users');
  }
}
