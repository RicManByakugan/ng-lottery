import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  password_confirm: string = '';

  onRegister() {
    const userData = {
      email: this.email,
      password: this.password,
      password_confirm: this.password_confirm
    };

    console.log('Utilisateur enregistré :', userData);
  }
}
