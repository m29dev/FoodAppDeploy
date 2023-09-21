import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit(authData: any) {
    console.log('sign in');

    this.auth.signIn(authData.value.email, authData.value.password).subscribe({
      next: (res) => {
        authData.reset();
        this.router.navigate(['restaurants']);
      },
      error: (err) => {
        this.toastr.error('', 'incorrect email or password');
      },
    });
  }
}
