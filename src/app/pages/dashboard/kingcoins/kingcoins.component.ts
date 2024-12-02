import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LotteryService } from '../../../service/lottery.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-kingcoins',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './kingcoins.component.html',
  styleUrl: './kingcoins.component.scss',
})
export class KingcoinsComponent {
  menu: boolean = false;
  amount: number = 0;
  resultMessage: string = '';
  loginStatus: string = '';

  constructor(private lotteryService: LotteryService) {}

  switchMenu() {
    this.menu = !this.menu;
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.resultMessage = '';
    this.loginStatus = '';
    this.lotteryService.buyKingCoins(this.amount).subscribe((res) => {
      console.log(res);
    });
  }
}
