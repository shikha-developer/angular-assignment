import {CanActivate} from "@angular/router";
import { Injectable } from '@angular/core';
import { isUserLoggedInService } from '../app/services/isUserLoggedIn.service';
import { Router } from '@angular/router';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate { 
  logIn = true;
  constructor(private isUserLoggedInService: isUserLoggedInService ,private router:Router) {}; 

  canActivate() {
    
    if (this.isUserLoggedInService.isUserLoggedIn()) { 
      return true;
    } else {
      this.router.navigate(['/login']);
      window.alert("Please login first to view this page"); 
      return false;
    }
  }
}