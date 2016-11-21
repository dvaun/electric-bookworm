/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';

import { ROUTING } from "./app.routing";

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RoomService } from './components/room/room.service';
import { RoomComponent } from './components/room/room.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { ThanksComponent } from './components/thanks/thanks.component';

@NgModule({
  imports: [
    BrowserModule,
    ClarityModule,
    ROUTING
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RoomComponent,
    CalendarComponent,
    DetailsComponent,
    LoginComponent,
    ThanksComponent
  ],
  providers: [
    RoomService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
