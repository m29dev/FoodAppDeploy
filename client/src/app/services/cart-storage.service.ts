import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartStorageService {
  constructor() {}

  onChange = new Subject<any>();

  // addToCart(item: any) {
  //   const currCart = this.getCart();
  //   let doesContain = false;

  //   //check if item has been already added to the cart
  //   currCart?.forEach((res: any) => {
  //     if (res.name === item.name) {
  //       doesContain = true;
  //       if (+res.quantity + +item.quantity > 19) {
  //         res.quantity = 19;
  //       } else {
  //         res.quantity = +res.quantity + +item.quantity;
  //       }
  //     }
  //   });

  //   if (doesContain) {
  //     localStorage.setItem('cart', JSON.stringify(currCart));
  //     this.onChange.next(currCart);
  //   }

  //   if (!doesContain) {
  //     let newCart;

  //     if (currCart) newCart = [...currCart, item];
  //     else newCart = [item];

  //     localStorage.setItem('cart', JSON.stringify(newCart));
  //     this.onChange.next(newCart);
  //   }
  // }

  addToCart(item: any) {
    let currCart = this.getCart();

    if (currCart) {
      let doesContain = false;

      currCart.forEach((restaurantItem: any) => {
        if (restaurantItem.restaurant === item.restaurant) {
          doesContain = true;

          //check if item already exist in the items array
          let doesContainItem = false;

          restaurantItem.items.forEach((resItem: any) => {
            if (resItem.name === item.name) {
              doesContainItem = true;

              //increase item quantity
              resItem.quantity = +resItem.quantity + +item.quantity;
            }
          });

          if (!doesContainItem) {
            //add item to the existing restaurant object items array
            restaurantItem.items.push(item);
          }
        }
      });

      if (!doesContain) {
        currCart.push({
          restaurant: item.restaurant,
          items: [item],
        });
      }
    }

    if (!currCart) {
      currCart = [
        {
          restaurant: item.restaurant,
          items: [item],
        },
      ];
    }

    localStorage.setItem('cart', JSON.stringify(currCart));
    this.onChange.next(currCart);
  }

  // updateQuantity(item: any) {
  //   const currCart = this.getCart();
  //   currCart.forEach((res: any) => {
  //     if (res.name === item.name) {
  //       res.quantity = item.quantity;
  //     }
  //   });
  //   localStorage.setItem('cart', JSON.stringify(currCart));
  //   this.onChange.next(currCart);
  // }

  updateQuantity(item: any) {
    let currCart = this.getCart();

    // currCart.forEach((res: any) => {
    //   if (res.name === item.name) {
    //     res.quantity = item.quantity;
    //   }
    // });
    currCart.forEach((restaurant: any) => {
      if (restaurant.restaurant === item.restaurant) {
        restaurant.items.forEach((res: any) => {
          if (res.name === item.name) {
            res.quantity = item.quantity;
          }
        });
      }
    });

    localStorage.setItem('cart', JSON.stringify(currCart));
    this.onChange.next(currCart);
  }

  getCart() {
    const cart = localStorage.getItem('cart');
    if (!cart) return null;
    return JSON.parse(cart);
  }

  // removeItem(item: any) {
  //   const currCart = this.getCart();

  //   let arr: any = [];
  //   currCart.forEach((cartItem: any) => {
  //     if (cartItem.name !== item.name) arr.push(cartItem);
  //   });

  //   localStorage.setItem('cart', JSON.stringify(arr));
  //   this.onChange.next(arr);
  // }
  removeItem(item: any) {
    let currCart = this.getCart();

    currCart.forEach((restaurant: any) => {
      if (restaurant.restaurant === item.restaurant) {
        console.log(restaurant.restaurant);
        restaurant.items = restaurant.items.filter((res: any) => {
          return res.name !== item.name;
        });

        //if restaurant items array empty, remove restaurant object
        if (restaurant.items.length === 0) {
          currCart = currCart.filter((res: any) => {
            return res.restaurant !== item.restaurant;
          });
        }
      }
    });

    localStorage.setItem('cart', JSON.stringify(currCart));
    this.onChange.next(currCart);
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.onChange.next(null);
  }
}
