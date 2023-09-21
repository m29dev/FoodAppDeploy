import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartStorageService } from 'src/app/services/cart-storage.service';
import { StripeService } from 'src/app/services/stripe.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartStorage: CartStorageService,
    private stripe: StripeService,
    private router: Router
  ) {}

  @Input('sidebar') sidebar: boolean = false;
  cart: any;
  fullPrice = 0;

  onBuy() {
    if (this.cart)
      //stripe link
      this.stripe.stripePayment().subscribe((res) => {
        this.cartStorage.clearCart();
        this.cart = null;
        console.log(res);
      });
  }

  onCheckout() {
    this.router.navigate(['checkout']);
  }

  onClearCart() {
    this.cart = null;
    this.cartStorage.clearCart();
  }

  onItemRemove(item: any) {
    this.cartStorage.removeItem(item);
  }

  onPlus(item: any) {
    if (item.quantity < 19) {
      item.quantity++;
      this.cartStorage.updateQuantity(item);
    }
  }

  onMinus(item: any) {
    if (item.quantity >= 2) {
      item.quantity--;
      this.cartStorage.updateQuantity(item);
    }
  }

  calcSubtotal() {
    this.cart?.forEach((restarant: any) => {
      restarant.items.forEach((item: any) => {
        this.fullPrice += +item?.price * +item?.quantity;
      });
    });
  }

  ngOnInit(): void {
    this.cart = this.cartStorage.getCart();
    this.calcSubtotal();

    //update data on change
    this.cartStorage.onChange.subscribe((res) => {
      this.cart = res;
      this.fullPrice = 0;
      this.calcSubtotal();
    });
  }
}
