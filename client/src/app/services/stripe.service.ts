import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { CartStorageService } from './cart-storage.service';
import { map } from 'rxjs';
import { loadStripe } from '@stripe/stripe-js';

const baseURL = 'http://localhost:3000/stripe';
//const baseURL = `https://testserver2-hcc6.onrender.com/stripe`;

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(
    private http: HttpClient,
    private cartStorage: CartStorageService,
    private storage: LocalStorageService
  ) {}

  stripePayment() {
    const cart = this.cartStorage.getCart();
    const email = this.storage.getUserInfo();
    console.log('try1');
    return this.http.post(`${baseURL}/checkout`, { cart, email }).pipe(
      map(async (res: any) => {
        let stripe = await loadStripe(
          `pk_test_51NiYBhILz2eg7WhKYlYusSC39hrItfyQrPMT9hnhexPrhhbm4uEirAumXNj0wZvUB9tAHm6mspZjbpS1wCJdYYSC00SChLZFY5`
        );

        stripe?.redirectToCheckout({
          sessionId: res.id,
        });

        console.log(res.id);
      })
    );
  }

  get_session(id: string) {
    return this.http.get(`${baseURL}/checkout/session/${id}`);
  }
}
