import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {Matchers, PactWeb} from '@pact-foundation/pact-web';
import getAllUsersStub from './stubs/get-all-users.stub.json';
import {GITHUB_URL} from '../../app.config';

describe('UsersService', () => {
  let service: UsersService;
  let provider;

  beforeAll(done => {
    provider = new PactWeb({
      cors: true,
      port: 8100,
      log: require('path').resolve(process.cwd(), 'pacts', 'pact.log'),
      dir: 'pacts',
      spec: 2
    });

    // required for slower CI environments
    setTimeout(done, 2000);

    // Required if run with `singleRun: false`
    provider.removeInteractions();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [{
        provide: GITHUB_URL,
        useValue: 'http://localhost:8100'
      }]
    });
    service = TestBed.inject(UsersService);
  });

  afterAll(done => {
    provider.finalize().then(
      () => {
        done();
      },
      err => {
        done.fail(err);
      }
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    beforeAll(done => {
      provider
        .addInteraction({
          state: 'get all users',
          uponReceiving: 'request to GET users',
          withRequest: {
            method: 'GET',
            path: '/users'
          },
          willRespondWith: {
            status: 200,
            body: Matchers.somethingLike(getAllUsersStub)
          }
        })
        .then(done, error => done.fail(error));
    });

    it('should call getAll', done => {
      service.getAll().subscribe(users => {
        expect(users.length).toEqual(30);
        done();
      });
    });
  });
});
