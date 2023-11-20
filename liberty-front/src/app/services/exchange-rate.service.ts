import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from '../interfaces/exchange-rates';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/839c4e13e7ea99ff35f0dd7e/latest/USD';

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any> {
    return this.http.get<ExchangeRatesResponse>(this.apiUrl);
  }
}