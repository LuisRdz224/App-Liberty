import { Component } from '@angular/core';
import { PaymentsService } from '../../services/payments.service';
import { ExchangeRatesService } from '../../services/exchange-rate.service';
import { ResponseData } from "../../interfaces/payments.model";
import { ExchangeRatesResponse } from "../../interfaces/exchange-rates";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  states: string[] = []
  selectedState: string = ''
  responseData: ResponseData | undefined
  exchangeRates: ExchangeRatesResponse | undefined

  constructor(private paymentsService: PaymentsService, private exchangeRatesService: ExchangeRatesService) {
    this.getExchangeRates()
  }

  ngOnInit(): void {
    this.getStates()
  }

  getStates(): void {
    this.paymentsService.getPayments().subscribe(
      (data: { states: string[] }) => {
        this.states = data.states;
      },
      (error) => {
        console.error('Error al realizar la solicitud:', error);
      }
    );
  }
  onStateChange(): void {
    if (!this.selectedState) {
      console.error('Por favor, selecciona un estado antes de hacer la solicitud.');
      return;
    }
    this.paymentsService.getPaymentsByState(`${this.selectedState}`).subscribe(
      (data: ResponseData) => {
        this.responseData = data;
      },
      (error) => {
        console.error('Error al realizar la solicitud:', error);
      }
    );
  }
  getExchangeRates(): void {
    this.exchangeRatesService.getExchangeRates().subscribe(
      (data) => {
        this.exchangeRates = data;
      },
      (error) => {
        console.error('Error fetching exchange rates:', error);
      }
    );
  }
}
