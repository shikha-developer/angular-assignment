import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetailsConfig } from '../shared/interfaces/users.config';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  dataUrl: string = "../../assets/userDetail.json";
  constructor(private _http: HttpClient) {

  }
  // Getting data from json file locally 
  getUserDetails(): Observable<UserDetailsConfig[]> {
    return this._http.get<UserDetailsConfig[]>(this.dataUrl);
  }

}
