import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  currentRoute = '';

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe(() => {
      const url = this.router.url;
      this.currentRoute = this.getRouteName(url);
    });
  }
  logout(): void {
    if (confirm("Se deconnecter du jeu ?")) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }

  private getRouteName(url: string): string {
    const map: { [key: string]: string } = {
      '/dashboard/kingcoins': 'KingCoins',
      '/dashboard/lottery': 'Loterie',
      '/dashboard/draw': 'Tirage',
      '/dashboard/winning': 'Resultat',
    };
    return map[url as keyof typeof map] || 'Unknown';
  }
}
