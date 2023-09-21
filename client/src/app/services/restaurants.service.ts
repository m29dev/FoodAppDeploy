import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const baseURL = 'http://localhost:3000/restaurants';
//const baseURL = `https://testserver2-hcc6.onrender.com/restaurants`;

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getRestaurants() {
    return this.http.get(`${baseURL}`);
  }

  getRestaurant(id: string) {
    return this.http.get(`${baseURL}/${id}`);
  }

  filterRestaurants(value: string) {
    //get restaurants
    let restaurants: any = [];
    this.getRestaurants().subscribe((res: any) => {
      res.forEach((item: any) => {
        if (item.restaurant.toLowerCase().includes(value.toLowerCase(), 0)) {
          restaurants.push(item);
        }
      });
    });

    this.onFilter.next(restaurants);
  }

  filterRestaurantsType(restaurants: any, queries: any) {
    let restaurantsType: any = [];

    // for each query check in each restaurant if match the type
    queries.forEach((type: any) => {
      restaurants.forEach((restaurant: any) => {
        if (type === restaurant.type) {
          restaurantsType.push(restaurant);
        }
      });
    });

    console.log(restaurantsType);

    this.onFilter.next(restaurantsType);
  }

  onFilter = new Subject<any>();
}
