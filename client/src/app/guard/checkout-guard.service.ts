import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckoutGuardService {
  constructor(private router: Router) {}

  isAllowed() {
    console.log(this.router.url);
    return this.router.url.includes('https://checkout.stripe.com/')
      ? true
      : false;
  }
}
