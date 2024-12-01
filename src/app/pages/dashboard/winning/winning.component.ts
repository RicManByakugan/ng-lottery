import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-winning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './winning.component.html',
  styleUrl: './winning.component.scss'
})
export class WinningComponent {
  navItem1: boolean = true
  navItem2: boolean = false

  toggleNavItem() {
    this.navItem1 =!this.navItem1
    this.navItem2 =!this.navItem2
  }
}
