import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartStorageService } from 'src/app/services/cart-storage.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-restaurant-id-detail',
  templateUrl: './restaurant-id-detail.component.html',
  styleUrls: ['./restaurant-id-detail.component.css'],
})
export class RestaurantIdDetailComponent implements OnInit {
  constructor(
    private restaurants: RestaurantsService,
    private activeRoute: ActivatedRoute,
    private cartStorage: CartStorageService,
    private toastr: ToastrService,
    private toast: ToastService,
    private router: Router
  ) {}

  restaurantDetail: any;

  onAddToCart(data: any, quantity: any) {
    data.quantity = quantity.value;
    this.cartStorage.addToCart(data);
    this.toastr.success(
      '',
      `${data.name} x${quantity.value} added to the cart`
    );

    this.toast.show('I am a standard toast');
  }

  onPlus(ref: any) {
    if (ref.value < 19) ref.value++;
  }

  onMinus(ref: any) {
    if (ref.value >= 2) ref.value--;
  }

  ngOnInit(): void {
    //get restaurant by an ID
    this.activeRoute.paramMap.subscribe((res: any) => {
      const id = res.params.id;

      this.restaurants.getRestaurant(id).subscribe({
        next: (data: any) => {
          this.restaurantDetail = data;
        },
        error: (err) => {
          console.log(err);
          this.router.navigate(['home']);
        },
      });
    });
  }
}
