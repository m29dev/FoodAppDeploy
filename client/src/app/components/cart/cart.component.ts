import { Component, Input, OnInit, HostListener } from '@angular/core';
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
  cartMobileSidebar: boolean = false;
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 700) {
      this.sidebar = true;
      this.cartMobileSidebar = true;
    } else {
      this.cartMobileSidebar = false;

      const cartElement: any = document.querySelector('.get-cart')?.clientWidth;
      if (cartElement >= 700) {
        this.sidebar = false;
        this.cartMobileSidebar = false;
      }
    }
  }

  onCopy(card: any) {
    // Select the text field
    card.select();
    card.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(card.value);
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

    //if mobile screen detecter set display mode sidebar to true
    if (window.innerWidth <= 500) {
      this.sidebar = true;
      this.cartMobileSidebar = true;
    }
  }
}
