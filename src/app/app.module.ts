import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersComponent } from './pages/users/users.component';
import {environment} from '../environments/environment';
import {GITHUB_URL} from '../app.config';
import {HttpUsersService} from './infrastructure/http-users.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './pages/home/home.component';

export const serviceUrlProvider = {
  provide: GITHUB_URL,
  useValue: environment.github
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [
    serviceUrlProvider,
    {provide: 'GetsAllUsers', useClass: HttpUsersService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
