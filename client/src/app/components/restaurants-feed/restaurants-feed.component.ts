import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-restaurants-feed',
  templateUrl: './restaurants-feed.component.html',
  styleUrls: ['./restaurants-feed.component.css'],
})
export class RestaurantsFeedComponent implements OnInit, OnDestroy {
  constructor(
    private restaurants: RestaurantsService,
    private router: Router
  ) {}

  restaurantsAll: any;
  filterSubject: any;

  onRestaurantClick(restaurant: any) {
    this.router.navigate([`restaurants/${restaurant?._id}`]);
  }

  ngOnInit(): void {
    //get ALL restaurants
    this.restaurants.getRestaurants().subscribe((res: any) => {
      this.restaurantsAll = res;
    });

    //listen for filter changes
    this.filterSubject = this.restaurants.onFilter.subscribe((res) => {
      this.restaurantsAll = res;
    });
  }

  ngOnDestroy(): void {
    this.filterSubject.unsubscribe();
  }
}
