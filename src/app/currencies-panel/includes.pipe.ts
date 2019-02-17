import { Pipe, PipeTransform } from '@angular/core'
import { Data } from '../services/models/Crytocurrency';

@Pipe({ name: 'includes' })
export default class Includes implements PipeTransform {
  transform(currencies: Data[], value: string): Data[] {
    return currencies.filter(currency => currency.FullName.toLowerCase().includes(value.toLowerCase()))
  }
}
