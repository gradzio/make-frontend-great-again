import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users;

  constructor(private client: HttpClient) {}

  ngOnInit() {
    this.client.get('https://api.github.com/users')
      .subscribe(usersResponse => this.users = usersResponse);
  }

}
