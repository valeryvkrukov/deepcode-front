import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppConfiguration } from './app.configuration';
import { AppComponent } from './app.component';
import { ApiService, ApiInterceptor } from './api.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';



@NgModule({
  declarations: [
    AppComponent,
    Client1Component,
    Client2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  	AppConfiguration,
  	{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  	ApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
