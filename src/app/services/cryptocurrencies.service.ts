import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import Cryptocurrency from './models/Crytocurrency';

@Injectable({
  providedIn: 'root'
})

export class CryptocurrenciesService {
  // private readonly API_KEY: string = "a555c277a18923c96f51fb889b04db09ffcdc24d18c38efa76e5d6a5a023fdbf";
  constructor(private httpClient: HttpClient) {}

  getCryptoCurrencies(): Observable<Cryptocurrency> {
    const query: string = 'https://min-api.cryptocompare.com/data/all/coinlist'

    return this.httpClient.get<Cryptocurrency>(query)
  }

  getCryptoCurrency(name: string): Observable<Cryptocurrency>{
    const url = `https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${name}&tsym=USD`
    return this.httpClient.get<Cryptocurrency>(url)
  }

  getCryptoCurrencyPrice(name: string): Observable<any> {
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${name}&tsyms=USD,JPY,EUR`
    return this.httpClient.get<Cryptocurrency>(url);
  }

  getCryptoCurrencyOHLCV(name: string): Observable<any> {
    const url = `https://min-api.cryptocompare.com/data/histoday?fsym=${name}&tsym=USD&limit=10`
    return this.httpClient.get<Cryptocurrency>(url)
  }

}
