import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class logInService {
    userLogIn = false;
    // Method to tell if user is logged in or not for accessing dashboard component
    isUserLoggedIn(): boolean {
        return this.userLogIn;
    }
    // Set the value of userLogIn property if user has logged In
    setUserloggedIn(value: boolean) {
        this.userLogIn = value;
    }
}