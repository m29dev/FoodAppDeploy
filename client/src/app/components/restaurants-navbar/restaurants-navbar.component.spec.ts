import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsNavbarComponent } from './restaurants-navbar.component';

describe('RestaurantsNavbarComponent', () => {
  let component: RestaurantsNavbarComponent;
  let fixture: ComponentFixture<RestaurantsNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsNavbarComponent]
    });
    fixture = TestBed.createComponent(RestaurantsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
