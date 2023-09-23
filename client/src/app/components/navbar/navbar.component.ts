import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartStorageService } from 'src/app/services/cart-storage.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private storage: LocalStorageService,
    private cartStorage: CartStorageService
  ) {}

  userInfo: any = null;
  sub1?: Subscription;
  searchResults?: any;
  cartNumber: any;

  onHomeClick() {
    this.router.navigate(['']);
  }

  onSignIn() {
    this.router.navigate(['signin']);
  }

  onSignUp() {
    this.router.navigate(['signup']);
  }

  onSignOut() {
    this.storage.clearUserInfo();
    this.router.navigate(['signin']);
  }

  onMyOrders() {
    this.router.navigate([`users/${this.userInfo.id}/orders`]);
  }

  // onAccount() {
  //   this.router.navigate([`users/${this.userInfo._id}`]);
  // }

  // onSettings() {
  //   this.router.navigate([`users/${this.userInfo._id}/settings`]);
  // }

  onUserClick(id: string) {
    this.router.navigate([`users/${id}`]);
  }

  onCartClick() {
    this.router.navigate(['checkout']);
  }

  ngOnInit(): void {
    this.userInfo = this.storage.getUserInfo();

    this.sub1 = this.storage.onChangeUserInfo.subscribe((change) => {
      this.userInfo = change;
    });

    //set cart on init
    this.cartNumber = this.cartStorage.cartNumber();

    //update cart when cart has been updated
    this.cartStorage.onChange.subscribe((cart) => {
      this.cartNumber = this.cartStorage.cartNumber();
    });
  }
  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
  }
}
