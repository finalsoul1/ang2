import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserOnlyComponent } from './user-only/user-only.component';
import { LoginComponent } from './login/login.component';

import { LoginGuard } from './guards/login.guard';

// home: 메인화면: 누구나 접근가능
// user-only: 인증된 회원만 접근가능
// login: 로그인화면, 누구나 접근가능
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'user-only', component:UserOnlyComponent, canActivate: [LoginGuard]},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
