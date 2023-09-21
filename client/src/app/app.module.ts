import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/authComponents/signin/signin.component';
import { SignUpComponent } from './components/authComponents/signup/signup.component';
import { ContainerComponent } from './components/container/container.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantsFeedComponent } from './components/restaurants-feed/restaurants-feed.component';
import { RestaurantsNavbarComponent } from './components/restaurants-navbar/restaurants-navbar.component';
import { RestaurantIdDetailComponent } from './components/restaurant-id-detail/restaurant-id-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';
import { CheckoutCancelComponent } from './components/checkout-cancel/checkout-cancel.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    ContainerComponent,
    RestaurantsComponent,
    RestaurantsFeedComponent,
    RestaurantsNavbarComponent,
    RestaurantIdDetailComponent,
    CartComponent,
    CheckoutSuccessComponent,
    CheckoutCancelComponent,
    OrdersComponent,
    UserOrdersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
