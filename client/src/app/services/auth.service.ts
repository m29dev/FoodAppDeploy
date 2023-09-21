import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

const baseURL = `http://localhost:3000/auth/`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  signUp(email: string, password: string) {
    return this.http
      .post(`${baseURL}signup`, {
        email,
        password,
      })
      .pipe(
        map((res) => {
          this.storage.saveUserInfo(res);
        })
      );
  }

  signIn(email: string, password: string) {
    return this.http
      .post(`${baseURL}signin`, {
        email,
        password,
      })
      .pipe(
        map((res) => {
          this.storage.saveUserInfo(res);
        })
      );
  }
}
