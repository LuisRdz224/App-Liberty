import { Component } from '@angular/core';
import { ExchangeRatesService } from "../../services/exchange-rate.service";

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  exchangeRates: any;
  lastUpdate: string = '';

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit(): void {
    this.getExchangeRates();
  }

  getExchangeRates(): void {
    this.exchangeRatesService.getExchangeRates().subscribe(
      (data: any) => {
        this.exchangeRates = data.conversion_rates;
        this.lastUpdate = new Date(data.time_last_update_unix * 1000).toLocaleString();
      },
      (error) => {
        console.error('Error al obtener tasas de cambio:', error);
      }
    );
  }
}
