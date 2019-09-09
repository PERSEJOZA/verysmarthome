import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FoodPlannerHeaderComponent } from "./food-planner-header.component";

describe("FoodPlannerHeaderComponent", () => {
  let component: FoodPlannerHeaderComponent;
  let fixture: ComponentFixture<FoodPlannerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPlannerHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPlannerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
