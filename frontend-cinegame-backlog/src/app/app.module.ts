import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

