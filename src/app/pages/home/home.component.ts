import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthService){
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard/kingcoins']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
