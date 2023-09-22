import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  title = 'client';
  isServerOnline = true;

  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  // check if server is online
  baseURL = 'https://foodappserver-lvot.onrender.com';
  pingServer() {
    return this.http.get(`${this.baseURL}`);
  }

  ngOnInit(): void {
    this.pingServer().subscribe({
      next: (res) => {
        console.log('new res: ', res);
        this.isServerOnline = true;
      },
      error: (err) => {
        console.log('new error: ', err);
        if (err) {
          console.log('display text to wait');
          this.isServerOnline = false;
        }
      },
    });
  }
}
