import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { logInService } from '../services/log-in.service'
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { By } from '@angular/platform-browser';

class RouterMock {
  navigate() {
    return {};
  }
}

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let el: HTMLElement;
  let de: DebugElement;
  let router: Router;
  let service: logInService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
      ],
      providers: [
        { provide: Router, useClass: RouterMock },
        logInService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(logInService);
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be invalid if fields are invalid', (() => {
    component.signupform.controls['userName'].setValue('');
    component.signupform.controls['password'].setValue('');
    component.signupform.controls['confirmPassword'].setValue('');

    expect(component.signupform.valid).toBeFalsy();
  }));

  it('onClickSubmit method should call  isUserLoggedIn method of logInService', (() => {
    spyOn(service, 'setUserloggedIn');
    component.signupform.controls['userName'].setValue('shikhgra12');
    component.signupform.controls['password'].setValue('test@1234');
    component.signupform.controls['confirmPassword'].setValue('test@1234');

    component.onClickSubmit();
    expect(service.setUserloggedIn).toHaveBeenCalledWith(true);
  }));

});
