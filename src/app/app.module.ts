import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrooperDetailComponent } from './trooper-detail/trooper-detail.component';
import { TroopersComponent } from './troopers/troopers.component';
import { TrooperSearchComponent } from './trooper-search/trooper-search.component';
import { MessagesComponent } from './messages/messages.component';
import { DeployComponent } from './deploy/deploy.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TroopersComponent,
    TrooperDetailComponent,
    MessagesComponent,
    TrooperSearchComponent,
    DeployComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
