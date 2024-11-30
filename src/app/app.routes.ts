import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { KingcoinsComponent } from './pages/dashboard/kingcoins/kingcoins.component';
import { LotteryComponent } from './pages/dashboard/lottery/lottery.component';
import { DrawComponent } from './pages/dashboard/draw/draw.component';
import { WinningComponent } from './pages/dashboard/winning/winning.component';
import { ShopComponent } from './pages/dashboard/shop/shop.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'kingcoins', component: KingcoinsComponent },
      { path: 'lottery', component: LotteryComponent },
      { path: 'draw', component: DrawComponent },
      { path: 'winning', component: WinningComponent },
      { path: 'shop', component: ShopComponent },
      { path: '', redirectTo: 'kingcoins', pathMatch: 'full' },
    ],
   },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
