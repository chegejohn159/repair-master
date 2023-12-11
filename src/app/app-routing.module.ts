import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/main/home/home.component";
import {BookRepairComponent} from "./components/main/book-repair/book-repair.component";
import {LoginComponent} from "./components/main/auth/login/login.component";
import {RegisterComponent} from "./components/main/auth/register/register.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'book-repair', component: BookRepairComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
