import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { isUserLoggedInService } from '../services/isUserLoggedIn.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  defaultName: String = "shikha";
  defaultPass: String = "test@1234";
  myform: FormGroup;
  formSubmitted : boolean = false;
  constructor(
    private router: Router,
    private isUserLoggedInService: isUserLoggedInService,
    private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.myform = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  onClickSubmit() {
    let givenName: String = this.myform.controls.userName.value;
    let givenPassword: String = this.myform.controls.password.value;
    this.formSubmitted = true;
    if(this.myform.invalid){
      return;
    }
    else{
      if(givenName == this.defaultName && givenPassword == this.defaultPass) {
        this.isUserLoggedInService.setUserloggedIn(true);
        this.router.navigate(['/dashboard', givenName]);

      }
      else {
        alert("Please enter valid credential");
      }
    } 
  }
  onClickSignUp(){
      //todo
  }
}
