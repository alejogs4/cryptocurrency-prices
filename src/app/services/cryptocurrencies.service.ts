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

}
