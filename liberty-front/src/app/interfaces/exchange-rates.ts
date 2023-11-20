export interface ExchangeRatesResponse {
    result: string;
    time_last_update_utc: string;
    conversion_rates: {
        USD: number;
        EUR: number;
        MXN: number;
    };
}
