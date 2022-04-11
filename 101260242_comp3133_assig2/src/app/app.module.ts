import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ListComponent } from './home/list/list.component';
import { AddListComponent } from './home/add-list/add-list.component';
import { ViewListComponent } from './home/view-list/view-list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, ListComponent, AddListComponent, ViewListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
