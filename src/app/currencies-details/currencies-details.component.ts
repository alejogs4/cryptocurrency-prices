import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import Cryptocurrency from '../services/models/Crytocurrency'
import { CryptocurrenciesService } from '../services/cryptocurrencies.service'


@Component({
  selector: 'app-currencies-details',
  templateUrl: './currencies-details.component.html',
  styleUrls: ['./currencies-details.component.css']
})
export class CurrenciesDetailsComponent implements OnInit {

  cryptoCurrency: Cryptocurrency
  cryptoCurrencyPrice: any
  cryptoCurrencyOHLCV: any

  constructor(
    private route: ActivatedRoute,
    private cryptoCurrenciesService: CryptocurrenciesService
  ) { }

  ngOnInit() {
    this.getCryptoCurrency();
  }

  getCryptoCurrency(): void{
    const name = this.route.snapshot.paramMap.get('name')

    this.cryptoCurrenciesService.getCryptoCurrency(name)
      .subscribe(cryptoCurrencies => {
        this.cryptoCurrency = cryptoCurrencies.Data[0].CoinInfo
      })

    this.cryptoCurrenciesService.getCryptoCurrencyPrice(name)
      .subscribe(cryptoPrice => {
        this.cryptoCurrencyPrice = cryptoPrice
      })

    this.cryptoCurrenciesService.getCryptoCurrencyOHLCV(name)
      .subscribe(cryptoOHLCV => {
        this.cryptoCurrencyOHLCV = cryptoOHLCV.Data
      })
  }

}
