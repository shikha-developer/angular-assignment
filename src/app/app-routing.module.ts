import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInAuthGuard } from './logInAuthGuard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component:LoginComponent,pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent,canActivate:[LogInAuthGuard] },
  { path: 'dashboard/:name', component: DashboardComponent,canActivate:[LogInAuthGuard] },
  { path: '**', component: ErrorPageComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
