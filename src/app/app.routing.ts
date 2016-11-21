/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/index';
import { HomeComponent } from './components/home/index';
import { RoomComponent } from './components/room/index';
import { CalendarComponent } from './components/calendar/index';
import { DetailsComponent } from './components/details/index';
import { LoginComponent } from './components/login/index';
import { ThanksComponent } from './components/thanks/index';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reserve', component: RoomComponent },
  { path: 'calendar/:id', component: CalendarComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: '**', component: HomeComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
