import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
})
export class UserOrdersComponent implements OnInit {
  constructor(
    private ordersService: OrdersService,
    private storage: LocalStorageService,
    private router: Router
  ) {}

  userOrders: any;

  onPay(data: any) {
    window.location.href = data;
  }

  ngOnInit(): void {
    const userInfo = this.storage.getUserInfo();

    this.ordersService.getUserOrders(userInfo.email).subscribe((res) => {
      this.userOrders = res;
    });
  }
}
