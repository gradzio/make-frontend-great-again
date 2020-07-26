import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../../domain/user.model';
import { GetsAllUsers } from '../../domain/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users$: Observable<UserModel[]>;

  constructor(@Inject('GetsAllUsers') private usersService: GetsAllUsers) {}

  ngOnInit(): void {
    this.users$ = this.usersService.getAll();
  }

}
