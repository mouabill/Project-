import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { MoviesComponent } from './movies/movies.component';
import { ToastModule } from './toast/toast.module';

import {FormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RequestsComponent } from './requests/requests.component';

import {AppRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavBarComponent,
    MainContentComponent,
    RequestsComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    ToastModule,
    AppRoutes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
