import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnlyLoggedInUsersGuard } from './isLoggedInAuthGuard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent,canActivate:[OnlyLoggedInUsersGuard] },
  { path: 'dashboard/:name', component: DashboardComponent,canActivate:[OnlyLoggedInUsersGuard] },
  { path: '', component:LoginComponent},
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
