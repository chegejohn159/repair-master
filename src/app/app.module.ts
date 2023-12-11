import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BookRepairComponent } from './components/main/book-repair/book-repair.component';
import { LoginComponent } from './components/main/auth/login/login.component';
import { RegisterComponent } from './components/main/auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { FooterComponent } from './components/shared/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ErrorSnackbarComponent} from "./components/shared/snackbar/error-snackbar/error-snackbar.component";
import {SuccessSnackbarComponent} from "./components/shared/snackbar/success-snackbar/success-snackbar.component";
import {ReactiveInputComponent} from "./components/shared/reactive-input/reactive-input.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveTextAreaComponent} from "./components/shared/reactive-text-area/reactive-text-area.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ReactiveSelectComponent } from './components/shared/reactive-select/reactive-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BookRepairComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ErrorSnackbarComponent,
    SuccessSnackbarComponent,
    ReactiveInputComponent,
    ReactiveTextAreaComponent,
    ReactiveSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
