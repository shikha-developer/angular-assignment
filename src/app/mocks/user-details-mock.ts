import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDetailsConfig } from '../shared/interfaces/users.config';

@Injectable()
export class userDetailsMock {
    public getUserDetails(): Observable<UserDetailsConfig[]> {
        let userDetails = [{ clientName: "Bred Doe", companyName: "ABC industries", address: "koregaon park, DK Street", contact: "35345647" }];
        return of(userDetails);
    }
}