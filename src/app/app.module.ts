import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Covid19Component } from './Component/covid19/covid19.component';

@NgModule({
  declarations: [
    AppComponent,
    Covid19Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
