import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  onGithubLink() {
    window.open('https://github.com/m29dev/FoodApp', '_blank');
  }
}
