import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  onChangeUserInfo = new Subject<any>();

  saveUserInfo(user: any) {
    localStorage.setItem('userInfo', JSON.stringify(user));
    this.onChangeUserInfo.next(user);
  }

  getUserInfo() {
    const user = localStorage.getItem('userInfo');
    if (!user) return null;
    return JSON.parse(user);
  }

  clearUserInfo() {
    localStorage.removeItem('userInfo');
    this.onChangeUserInfo.next(null);
  }
}
