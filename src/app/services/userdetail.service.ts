import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ErrorObservable } from 'rxjs/observable';

// import  'rxjs/add/operator/catch';
import { UserDetailsConfig } from '../users.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {
 dataUrl: string  = "../../assets/userDetail.json";
  constructor(private _http: HttpClient,
    private router: Router
    ) { 

  }
  getUserDetails():Observable<UserDetailsConfig[]>{
    return this._http.get<UserDetailsConfig[]>(this.dataUrl);
   // .catch(this.handleError);
  }
  // private handleError(errorResponse : HttpErrorResponse){
  //   if(errorResponse.error){
  //     console.error('Client side error', errorResponse.error);
  //   }
  //   else{
  //     this.router.navigate(['/login']);
  //   }
  //   return new ErrorObservable('There is problem with service');
  // }
  
}
