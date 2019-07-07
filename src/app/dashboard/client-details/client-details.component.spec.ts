import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsComponent } from './client-details.component';

describe('ClientDetailsComponent', () => {
  let component: ClientDetailsComponent;
  let fixture: ComponentFixture<ClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsComponent);
    component = fixture.componentInstance;
    component.clientsData = 
    { "clientName":"John Doe","companyName":"Panorama & Wt group","address":"koregaon park street,Phase ||","contact":"123456789"}
  
    fixture.detectChanges();
  });

 it('should create', () => {
    expect(component).toBeTruthy();
  });
});
