import { Component, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../services/cryptocurrencies.service'
import Cryptocurrency, { Data } from '../services/models/Crytocurrency'
import includes from './includes.pipe'

@Component({
  selector: 'app-currencies-panel',
  templateUrl: './currencies-panel.component.html',
  styleUrls: ['./currencies-panel.component.css']
})

export class CurrenciesPanelComponent implements OnInit {
  query: string = ''
  currencies: Data[];

  constructor(private cryptoService: CryptocurrenciesService) {
    this.getCryptocurrencyData()
  }

  ngOnInit() { }

  getCryptocurrencyData(): void {
    this.cryptoService.getCryptoCurrencies()
      .subscribe((response: Cryptocurrency) => {
        this.currencies = Object.values(response.Data).slice(0, 20)
      },
        (error) => {
          console.log(error)
          console.log('You have an error')
        })
  }

  handleInput(event: any) {
    this.query = event.target.value
  }
}
