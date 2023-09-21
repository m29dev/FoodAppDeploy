import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private restaurants: RestaurantsService) {}

  restaurantsAll: any;

  onRestaurantClick(restaurant: any) {
    console.log(restaurant);
  }

  ngOnInit(): void {
    //get ALL restaurants
    this.restaurants.getRestaurants().subscribe((res: any) => {
      console.log(res.data);
      this.restaurantsAll = res.data;
    });
  }
}
