import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class KingcoinsComponent implements OnInit {
  menu: boolean = false;
  amount: number = 0;
  dataUser: any;
  resultMessage: string = '';
  loginStatus: string = '';

  constructor(private lotteryService: LotteryService) {}

  ngOnInit(): void {
    this.getUserSolde();
  }

  getUserSolde() {
    this.lotteryService.getKingCoins().subscribe((res) => {
      this.dataUser = res;
    });
  }
  switchMenu() {
    this.getUserSolde();
    this.menu = !this.menu;
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.resultMessage = '';
    if (this.amount <= 0) {
      this.resultMessage = 'Veuillez saisir une quantité supérieure à 0';
      return;
    }
    this.loginStatus = 'Achat en cours';
    this.lotteryService.buyKingCoins(this.amount).subscribe(
      (res) => {
        this.resultMessage = '';
        this.loginStatus = '';
        if (res.email) {
          this.amount = 0;
          this.loginStatus = 'Achat effectuer';
          setTimeout(() => {
            this.loginStatus = '';
            this.switchMenu();
          }, 1200);
        } else {
          this.resultMessage = res.message;
        }
      },
      (err) => {
        this.loginStatus = '';
        this.resultMessage = err.error.message;
      }
    );
  }
}
