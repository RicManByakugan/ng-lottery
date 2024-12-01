import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LotteryService } from '../../service/lottery.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  password_confirm: string = '';
  loginStatus: string = '';
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

  onRegister() {
    if (!this.email || !this.password || !this.password_confirm) {
      this.resultMessage = 'Tous les champs doivent être remplis.';
      return;
    }
    if (this.password !== this.password_confirm) {
      this.resultMessage = 'Les mots de passe ne sont pas identiques.';
      return;
    }
    this.loginStatus = 'Connexion en cours ...';
    this.lotteryService.register(this.email, this.password).subscribe(
      (response) => {
        this.loginStatus = '';
        if (response.email) {
          this.loginStatus = 'Inscription réussi';
          this.resultMessage = '';
          this.router.navigate(['/login'])
        } else {
          this.resultMessage = response.message;
        }
      },
      (err) => {
        this.loginStatus = '';
        this.resultMessage = err.error.message;
      }
    );
  }
}
