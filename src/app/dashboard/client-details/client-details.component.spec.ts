import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsComponent } from './client-details.component';

describe('ClientDetailsComponent', () => {
  let component: ClientDetailsComponent;
  let fixture: ComponentFixture<ClientDetailsComponent>;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDetailsComponent]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Clientdata is being Initialised properly and being rendered in template', () => {

    component.clientsData =
    { clientName: "John Doe", companyName: "Panorama & Wt group", address: "koregaon park street,Phase ||", contact: "123456789" };
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(el.querySelector('.client-name').textContent).toBe("John Doe");
  });

});
