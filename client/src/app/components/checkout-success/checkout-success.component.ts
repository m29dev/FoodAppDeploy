import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeService } from 'src/app/services/stripe.service';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.css'],
})
export class CheckoutSuccessComponent implements OnInit {
  constructor(
    private router: Router,
    private stripe: StripeService,
    private route: ActivatedRoute
  ) {}

  onHome() {
    this.router.navigate(['restaurants']);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams['session_id'];

    this.stripe.get_session(id).subscribe((res) => {
      console.log(res);
    });
  }
}
