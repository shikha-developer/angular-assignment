import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnlyLoggedInUsersGuard } from './isLoggedInAuthGuard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component:LoginComponent} ,
  { path: 'dashboard', component: DashboardComponent,canActivate:[OnlyLoggedInUsersGuard] },
  { path: 'dashboard/:name', component: DashboardComponent,canActivate:[OnlyLoggedInUsersGuard] },
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
