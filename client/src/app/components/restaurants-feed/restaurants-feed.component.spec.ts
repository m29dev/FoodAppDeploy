import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsFeedComponent } from './restaurants-feed.component';

describe('RestaurantsFeedComponent', () => {
  let component: RestaurantsFeedComponent;
  let fixture: ComponentFixture<RestaurantsFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsFeedComponent]
    });
    fixture = TestBed.createComponent(RestaurantsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
