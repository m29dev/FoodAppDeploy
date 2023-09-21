import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit(authData: any) {
    //touched check
    if (!authData.touched)
      return this.toastr.error('', 'fill the form before submiting');

    //password check
    if (authData.value.password !== authData.value.passwordConfirm)
      return this.toastr.error('', 'both passwords must be the same');
    if (authData.value.password.length < 7)
      return this.toastr.error('', 'Password to short');

    //email check
    if (!authData.value.email.split('').includes('@'))
      return this.toastr.error('', 'incorrect email');

    return (
      this.signUp(authData.value.email, authData.value.password),
      authData.reset()
    );
  }

  signUp(email: string, password: string) {
    this.auth.signUp(email, password).subscribe({
      next: (res) => {
        this.router.navigate(['restaurants']);
      },
      error: (err) => {
        this.toastr.error('', err.error.message);
      },
    });
  }
}
