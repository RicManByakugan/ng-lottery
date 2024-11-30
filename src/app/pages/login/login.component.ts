import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isPasswordStep: boolean = false;

  onSubmit() {
    if (this.isPasswordStep) {
      this.submitLogin();
    } else {
      this.isPasswordStep = true;
    }
  }

  submitLogin() {
    const userCredentials = {
      email: this.email,
      password: this.password,
    };

    console.log('Utilisateur connecté:', userCredentials);
  }
}
