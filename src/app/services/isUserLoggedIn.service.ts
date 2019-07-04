import { Injectable, RootRenderer } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class isUserLoggedInService{
    userLogIn = false;
    isUserLoggedIn():boolean{
        return this.userLogIn;
    }
    setUserloggedIn(value){
        this.userLogIn = value;
    }
}