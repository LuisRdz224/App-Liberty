import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private apiUrl = 'http://localhost:3000/api/payments';
  constructor(private http: HttpClient) { }

  getPayments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPaymentsByState(stateUrl: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${stateUrl}`);
  }
}
