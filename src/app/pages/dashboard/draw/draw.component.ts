import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LotteryService } from '../../../service/lottery.service';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.scss',
})
export class DrawComponent {
  data: any;

  constructor(private lotteryService: LotteryService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.lotteryService.getLastDraw().subscribe((data) => {
      this.data = data;
    });
  }

  formatNumberGroup(numbers: number[]): string {
    return numbers.map((num) => num.toString().padStart(2, '0')).join('-');
  }
}
