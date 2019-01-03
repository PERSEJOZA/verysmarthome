import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCustomerInfoComponent } from './headerCustomerInfoComponent.component';

describe('HeaderCustomerInfoComponent', () => {
  let component: HeaderCustomerInfoComponent;
  let fixture: ComponentFixture<HeaderCustomerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCustomerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
