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

  it('should render users in a list', () => {
    const userStub: UserModel[] = [
      { login: 'login1', avatarUrl: { url: 'https://image.com/image1.jpg' } },
      { login: 'login2', avatarUrl: { url: 'https://image.com/image2.jpg' } }
    ];
    const getAllUsersSpy = spyOn(usersService, 'getAll')
      .and.returnValue(of(userStub));

    component.ngOnInit();

    expect(getAllUsersSpy).toHaveBeenCalled();

    component.users$.subscribe(_ => {
      fixture.detectChanges();
      const userItems = fixture.debugElement.queryAll(By.css('.mat-list-item'));
      const h3Element = userItems[0].query(By.css('h3'));
      const imgElement = userItems[0].query(By.css('img'));
      expect(userItems.length).toEqual(userStub.length);
      expect(h3Element.nativeElement.textContent).toEqual(userStub[0].login);
      expect(imgElement.nativeElement.src).toEqual(userStub[0].avatarUrl.url);
    });

  });
});
