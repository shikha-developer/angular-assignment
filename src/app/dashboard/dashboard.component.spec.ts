import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ActivatedRoute } from '@angular/router';

const d = { snapshot : { params:{name:'testUser'}} }

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers:[
        {provide:ActivatedRoute,useValue: d}
      ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoud rrender username property in html which is fetched from url',() => {
    
    fixture.detectChanges();
    expect(component.userName).toBe('testUser');
  })
});
