import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FoodCalendarComponent } from "./food-calendar.component";

describe("FoodCalendarComponent", () => {
  let component: FoodCalendarComponent;
  let fixture: ComponentFixture<FoodCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCalendarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
