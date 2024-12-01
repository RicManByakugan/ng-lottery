import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LotteryService } from '../../service/lottery.service';
import { AuthService } from '../../service/auth.service';
import { GuideComponent } from '../../component/guide/guide.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FormsModule, GuideComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginStatus: string = '';
  isPasswordStep: boolean = false;
  resultMessage: string = '';

  constructor(
    private lotteryService: LotteryService,
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard/kingcoins']);
    }
  }

  onSubmit() {
    if (this.isPasswordStep) {
      this.submitLogin();
    } else {
      this.isPasswordStep = true;
    }
  }

  submitLogin() {
    if (!this.email || !this.password) {
      this.resultMessage = 'Please fill in all fields';
      return;
    }
    const userCredentials = {
      email: this.email,
      password: this.password,
    };
    this.loginStatus = 'Connexion en cours ...';
    this.resultMessage = '';
    this.lotteryService
      .login(userCredentials.email, userCredentials.password)
      .subscribe(
        (response) => {
          this.loginStatus = '';
          if (response.access_token) {
            localStorage.setItem('token', response.access_token);
            this.resultMessage = '';
            window.location.reload();
          } else {
            this.resultMessage = 'Invalid email or password';
          }
        },
        (err) => {
          this.loginStatus = '';
          this.resultMessage = err.error.message;
        }
      );
  }
}
