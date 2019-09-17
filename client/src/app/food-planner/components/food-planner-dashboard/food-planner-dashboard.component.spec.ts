import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FoodPlannerDashboardComponent} from './food-planner-dashboard.component';

describe('FoodPlannerDashboardComponent', () => {
  let component: FoodPlannerDashboardComponent;
  let fixture: ComponentFixture<FoodPlannerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPlannerDashboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPlannerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
