import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LotteryService } from '../../../service/lottery.service';

@Component({
  selector: 'app-lottery',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './lottery.component.html',
  styleUrl: './lottery.component.scss',
})
export class LotteryComponent {
  menu: boolean = true;
  nextStep: boolean = true;

  lotteryData = {
    numbers: Array(5).fill(null),
    stars: Array(2).fill(null),
  };
  errorMessageNumbers: string | null = null;
  errorMessageStars: string | null = null;
  globalErrorMessage: string | null = null;
  messageResult: string | null = null;

  constructor(private lotteryService: LotteryService) {}

  switchMenu() {
    this.menu = !this.menu;
  }
  switchMenuNext() {
    this.nextStep = !this.nextStep;
  }

  buyLotteryTicket() {
    this.errorMessageNumbers = null;
    this.errorMessageStars = null;
    this.globalErrorMessage = null;
    const numbers = this.lotteryData.numbers;
    const stars = this.lotteryData.stars;
    if (numbers.some((num) => num === null || num < 1 || num > 50)) {
      this.errorMessageNumbers = 'Veuillez entrer des numéros entre 1 et 50.';
    } else if (new Set(numbers).size !== 5) {
      this.errorMessageNumbers = 'Les numéros doivent être uniques.';
    }
    if (stars.some((star) => star === null || star < 1 || star > 12)) {
      this.errorMessageStars = 'Veuillez entrer des étoiles entre 1 et 12.';
    } else if (new Set(stars).size !== 2) {
      this.errorMessageStars = 'Les étoiles doivent être uniques.';
    }
    if (this.errorMessageNumbers || this.errorMessageStars) {
      this.globalErrorMessage = 'Veuillez corriger les erreurs ci-dessus.';
      return;
    }

    this.lotteryService.buyTicket(numbers, stars).subscribe(
      (res) => {
        if (res.updatedUser) {
          this.messageResult = 'Achat effectuer, Voir tirage maintenant';
          setTimeout(() => {
            this.messageResult = null;
          }, 1200);
        } else {
          this.globalErrorMessage = res.message;
        }
      },
      (err) => {
        this.messageResult = null;
        this.globalErrorMessage = err.error.message;
      }
    );
  }
}
