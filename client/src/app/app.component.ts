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
    this.pingServer().subscribe((res) => {
      console.log(res);
    });
  }
}
