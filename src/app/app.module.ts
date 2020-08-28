import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { NgxSpinnerModule } from 'ngx-spinner';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule,BrowserAnimationsModule, ReactiveFormsModule,NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
