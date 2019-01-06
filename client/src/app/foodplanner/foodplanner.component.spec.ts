import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodplannerComponent } from './foodplanner.component';

describe('FoodplannerComponent', () => {
  let component: FoodplannerComponent;
  let fixture: ComponentFixture<FoodplannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodplannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
