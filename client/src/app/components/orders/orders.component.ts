import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  displayDate: any;
  orders: any = [];

  getDate() {
    //get today date
    const today = new Date();
    console.log(today);
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    this.displayDate = `${day < 10 ? '0' + day : day}.${
      month < 10 ? '0' + month : month
    }.${year}`;
  }

  getOrders() {
    let restarantsItems: any = [];
    this.ordersService.getOrders().subscribe((res: any) => {
      console.log(res);

      res.forEach((restaurant: any) => {
        restarantsItems.push(restaurant);
      });
    });

    //console.log(restarantsItems);
  }

  sortByRestaurants(orders: any) {
    orders.forEach((restaurant: any) => {
      console.log(restaurant);
    });
  }

  ngOnInit(): void {
    this.getDate();
    this.getOrders();
  }
}
