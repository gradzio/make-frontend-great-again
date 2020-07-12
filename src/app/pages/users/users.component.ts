import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users$: Observable<any>;

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.users$ = this.client.get('https://api.github.com/users');
  }

}
