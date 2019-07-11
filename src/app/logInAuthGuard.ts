import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { logInService } from './services/log-in.service';
import { Router } from '@angular/router';

@Injectable()
export class LogInAuthGuard implements CanActivate {
  logIn : boolean= true;
  constructor(private logInService: logInService, private router: Router) { };

  canActivate() {

    if (this.logInService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      window.alert("Please login first to view this page");
      return false;
    }
  }
}