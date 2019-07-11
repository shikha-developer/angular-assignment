import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { logInService } from '../services/log-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Default credentials are added for logging
  defaultName: string = "shikha12";
  defaultPass: string = "test@1234";
  myform: FormGroup;
  formSubmitted: boolean = false;
  constructor(
    private router: Router,
    private logInService: logInService,
    private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.myform = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  //It should go to signup page if credentials are valid
  onClickSubmit() {
    let givenName: string = this.myform.controls.userName.value;
    let givenPassword: string = this.myform.controls.password.value;
    this.formSubmitted = true;
    if (this.myform.invalid) {
      return;
    }
    else {
      if (givenName == this.defaultName && givenPassword == this.defaultPass) {
        this.logInService.setUserloggedIn(true);
        this.router.navigate(['/dashboard', givenName]);
      }
      else {
        alert("Please enter valid credential");
      }
    }
  }
  //navigate to sign up page after clicking on signup button
  onClickSignUp() {
    this.router.navigate(['/signup']);
  }
}
