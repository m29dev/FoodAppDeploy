import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-cancel',
  templateUrl: './checkout-cancel.component.html',
  styleUrls: ['./checkout-cancel.component.css'],
})
export class CheckoutCancelComponent {
  constructor(private router: Router) {}

  onHome() {
    this.router.navigate(['restaurants']);
  }
}
