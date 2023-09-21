import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = 'https://foodappserver-lvot.onrender.com/orders';
//const baseURL = `https://testserver2-hcc6.onrender.com/orders`;

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get(`${baseURL}`);
  }

  getUserOrders(email: string) {
    return this.http.get(`${baseURL}/users/${email}`);
  }
}
