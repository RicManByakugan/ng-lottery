import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const url = this.router.url;
      this.currentRoute = this.getRouteName(url);
    });
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
