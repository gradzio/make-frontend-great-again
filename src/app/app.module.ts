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

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: GITHUB_URL,
    useValue: environment.github
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
