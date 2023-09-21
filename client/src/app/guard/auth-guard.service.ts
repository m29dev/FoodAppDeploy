import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  constructor(private storage: LocalStorageService) {}

  isLoggedIn() {
    return this.storage.getUserInfo() ? true : false;
  }
}
