import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/authComponents/signin/signin.component';
import { SignUpComponent } from './components/authComponents/signup/signup.component';
import { authGuardGuard } from './guard/auth-guard.guard';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantIdDetailComponent } from './components/restaurant-id-detail/restaurant-id-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';
import { CheckoutCancelComponent } from './components/checkout-cancel/checkout-cancel.component';
import { checkoutGuardGuard } from './guard/checkout-guard.guard';
import { OrdersComponent } from './components/orders/orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'restaurants/:id',
    component: RestaurantIdDetailComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'users/:id/orders',
    component: UserOrdersComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'checkout',
    component: CartComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'checkout/success',
    component: CheckoutSuccessComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'checkout/cancel',
    component: CheckoutCancelComponent,
    canActivate: [authGuardGuard],
  },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
