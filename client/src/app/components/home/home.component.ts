import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private storage: LocalStorageService, private router: Router) {}

  onClick() {
    this.router.navigate(['signin']);
  }

  ngOnInit(): void {
    if (this.storage.getUserInfo()) {
      console.log('user is logges in');
      this.router.navigate(['restaurants']);
    }
  }
}
