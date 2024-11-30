import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kingcoins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kingcoins.component.html',
  styleUrl: './kingcoins.component.scss'
})
export class KingcoinsComponent {
  menu: boolean = false;

  switchMenu() {
    this.menu = !this.menu;
  }
}
