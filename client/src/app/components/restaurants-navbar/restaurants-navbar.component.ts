import { Component } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants-navbar',
  templateUrl: './restaurants-navbar.component.html',
  styleUrls: ['./restaurants-navbar.component.css'],
})
export class RestaurantsNavbarComponent {
  constructor(private restaurants: RestaurantsService) {}

  activateItemFilter(item: any, type: string) {
    // toggle active-item class
    item.classList.toggle('active-item');

    //create array for search queries
    let searchArr: any = [];

    // check for all active-item class items
    const testAll = document.querySelectorAll('.item');
    testAll.forEach((item: any) => {
      if (item.classList.contains('active-item')) {
        searchArr.push(item.getAttribute('name'));
      }
    });

    // if query arr is empty, return all restaurants
    if (searchArr.length === 0) {
      this.restaurants.filterRestaurants('');
    } else {
      //get all restaurants
      this.restaurants.getRestaurants().subscribe((res: any) => {
        // display all active search queries
        this.restaurants.filterRestaurantsType(res, searchArr);
      });
    }
  }

  onChange(data: any) {
    this.restaurants.filterRestaurants(data.value);
  }
}
