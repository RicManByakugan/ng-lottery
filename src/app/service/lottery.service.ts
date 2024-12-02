import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class LotteryService {
  // private baseUrl = 'http://localhost:3000';
  // private baseUrl = 'https://lottery-app-gm0w.onrender.com';
  private baseUrl = environment
  private token = localStorage.getItem('token') as string;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, { email, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, { email, password });
  }

  getUserDetails(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.baseUrl}/auth/user`, { headers });
  }

  buyKingCoins(amount: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.baseUrl}/kingcoins/buy`, { amount }, { headers });
  }

  buyTicket(
    numbers: number[],
    stars: number[],
    drawId: number
  ): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(
      `${this.baseUrl}/lottery/buy`,
      { numbers, stars, drawId },
      { headers }
    );
  }

  getLastDraw(): Observable<any> {
    return this.http.get(`${this.baseUrl}/draws/result`);
  }

  generateDraw(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.baseUrl}/draws/generate`, {}, { headers });
  }

  computeWinnings(drawId: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(
      `${this.baseUrl}/winning/compute`,
      { drawId },
      { headers }
    );
  }

  getUserWinnings(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.baseUrl}/winning`, { headers });
  }
}
