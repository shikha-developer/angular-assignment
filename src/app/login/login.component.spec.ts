import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { logInService } from '../services/log-in.service';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { By } from '@angular/platform-browser';

const RouterMock = {
  navigate() {
    return {};
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: HTMLElement;
  let router: Router;
  let service: logInService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
      ],
      providers: [
        { provide: Router, useValue: RouterMock },
        logInService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(logInService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be invalid if fields are invalid', (() => {
    component.myform.controls['userName'].setValue('');
    component.myform.controls['password'].setValue('');
    expect(component.myform.valid).toBeFalsy();
  }));
  it('onClickSignUp method should be called on the click', (() => {
    fixture.detectChanges();
    spyOn(component, 'onClickSignUp');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onClickSignUp).toHaveBeenCalled();
  }));
  it('onClickSubmit method should call  isUserLoggedIn method of logInService', (() => {
    fixture.detectChanges();
    spyOn(service, 'setUserloggedIn');
    component.myform.controls['userName'].setValue('shikha12');
    component.myform.controls['password'].setValue('test@1234');

    component.onClickSubmit();
    expect(service.setUserloggedIn).toHaveBeenCalledWith(true);
  }));
  it('onClickSubmit method should not call  isUserLoggedIn if credentials are wrong', (() => {
    fixture.detectChanges();
    spyOn(service, 'setUserloggedIn');
    component.myform.controls['userName'].setValue('wrongtest');
    component.myform.controls['password'].setValue('test@1234');

    component.onClickSubmit();
    expect(service.setUserloggedIn).not.toHaveBeenCalled();
  }));

});
