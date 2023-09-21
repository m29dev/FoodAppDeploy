import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantIdDetailComponent } from './restaurant-id-detail.component';

describe('RestaurantIdDetailComponent', () => {
  let component: RestaurantIdDetailComponent;
  let fixture: ComponentFixture<RestaurantIdDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantIdDetailComponent]
    });
    fixture = TestBed.createComponent(RestaurantIdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
