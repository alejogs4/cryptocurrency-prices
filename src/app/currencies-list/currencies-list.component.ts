import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../services/models/Crytocurrency';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.css']
})
export class CurrenciesListComponent implements OnInit {
  @Input() currencies : Data[]
  @Input() query : string

  constructor() { }
  ngOnInit() {}
}
