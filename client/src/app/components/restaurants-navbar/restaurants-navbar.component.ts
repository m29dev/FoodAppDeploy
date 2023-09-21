import { Component } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants-navbar',
  templateUrl: './restaurants-navbar.component.html',
  styleUrls: ['./restaurants-navbar.component.css'],
})
export class RestaurantsNavbarComponent {
  constructor(private restaurants: RestaurantsService) {}

  onChange(data: any) {
    this.restaurants.filterRestaurants(data.value);
  }
}
