import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GetsAllUsers} from '../../domain/users.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public usersCount$: Observable<number>;

  constructor(@Inject('GetsAllUsers') private usersService: GetsAllUsers) {}

  ngOnInit(): void {
    this.usersCount$ = this.usersService.getAll()
      .pipe(
        map(users => users.length)
      );
  }

}
