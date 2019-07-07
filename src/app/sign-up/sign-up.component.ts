import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { isUserLoggedInService } from '../services/isUserLoggedIn.service'
import { matchingPassword } from './validators/matching-passwords.validators';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupform: FormGroup;
  formSubmitted : boolean;

  constructor(
    private router: Router,
    private isUserLoggedInService: isUserLoggedInService,
    private formBuilder: FormBuilder
    )
   { 
     
   }

  ngOnInit() {
    this.signupform = this.formBuilder.group({
      userName: ['', [Validators.required,Validators.minLength(6),Validators.pattern('\[a-zA-Z]+[0-9]+')]],
      password: ['', [Validators.required,Validators.minLength(6)] ],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: matchingPassword('password', 'confirmPassword')
      }
      )
  }
  onClickSubmit(){ 
    this.formSubmitted = true;
    if(this.signupform.invalid){
      return; // If any of the fielsd is invalid, form will not be submitted
    }
    let givenName: String = this.signupform.controls.userName.value;
    this.isUserLoggedInService.setUserloggedIn(true);
    this.router.navigate(['/dashboard', givenName]);
  }


}
