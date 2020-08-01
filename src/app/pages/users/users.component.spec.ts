import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {MatListModule} from '@angular/material/list';
import {EMPTY, of} from 'rxjs';
import {GetsAllUsers} from '../../domain/users.service';
import {By} from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UserModel} from '../../domain/user.model';
import {Url} from '../../domain/url.vo';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersService: GetsAllUsers;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatListModule, MatProgressSpinnerModule ],
      declarations: [ UsersComponent ],
      providers: [
        {
          provide: 'GetsAllUsers', useValue: {
            getAll: () => EMPTY
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    usersService = TestBed.get('GetsAllUsers');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render spinner before loading', () => {
    const getAllUsersSpy = spyOn(usersService, 'getAll');

    component.ngOnInit();

    expect(getAllUsersSpy).toHaveBeenCalled();
    expect(fixture.debugElement.query(By.css('.mat-spinner'))).toBeTruthy();
  });

  it('should render blank slate info', () => {
    const getAllUsersSpy = spyOn(usersService, 'getAll')
      .and.returnValue(of([]));

    component.ngOnInit();

    expect(getAllUsersSpy).toHaveBeenCalled();

    component.users$.subscribe(_ => {
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.textContent)
        .toContain('There are not users :(');
    });

  });

  it('should render multiple users in the list', () => {
    const usersStub: UserModel[] = [
      { login: 'login1', avatarUrl: { url: 'https://image.com/image1.jpg' } },
      { login: 'login2', avatarUrl: { url: 'https://image.com/image2.jpg' } },
    ];
    const getAllUsersSpy = spyOn(usersService, 'getAll')
      .and.returnValue(of(usersStub));

    component.ngOnInit();

    expect(getAllUsersSpy).toHaveBeenCalled();

    component.users$.subscribe(_ => {
      fixture.detectChanges();
      const userItems = fixture.debugElement.queryAll(By.css('.mat-list-item'));
      expect(userItems.length).toEqual(usersStub.length);
      expect(userItems[0].query(By.css('img')).nativeElement.src)
        .toEqual(usersStub[0].avatarUrl.url);
      expect(userItems[0].query(By.css('h3')).nativeElement.textContent)
        .toEqual(usersStub[0].login);
    });

  });
});
