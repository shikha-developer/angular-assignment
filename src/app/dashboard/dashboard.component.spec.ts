import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ActivatedRoute } from '@angular/router';
import { UserdetailService } from '../services/userdetail.service';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { userDetailsMock } from '../mocks/user-details-mock';
import {  of } from 'rxjs';


const d = { snapshot : { params:{name:'testUser'}} }

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let userService : UserdetailService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,
      ClientDetailsComponent ],
      providers:[
        {provide:ActivatedRoute,useValue: d},
        {provide:UserdetailService, useClass: userDetailsMock},

      ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      userService = TestBed.get(UserdetailService);
      fixture.detectChanges();
    });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Clicking on onUserClick method should initiatialize client property',() => {
     
    let testUser = { clientName: "Bred Doe", companyName: "ABC industries", address: "koregaon park, DK Street", contact: "35345647" };
    component.onUserClick(testUser);
    expect(component.client).toBe(testUser);
  });
  it('errorHandling should be called while having errors in fetching data',() => {
     
    let testUser = [
      { clientName: "Bred Doe", companyName: "ABC industries", address: "koregaon park, DK Street", contact: "35345647",}
    ];
    spyOn(userService,'getUserDetails').and.returnValue(of(testUser));
    expect(component.errorDetails).not.toBe("");
  });
});
