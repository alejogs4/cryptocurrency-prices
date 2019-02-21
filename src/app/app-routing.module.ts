import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { CurrenciesDetailsComponent } from './currencies-details/currencies-details.component'
import { CurrenciesPanelComponent } from './currencies-panel/currencies-panel.component'

const routes: Routes = [
  { path: '', component: CurrenciesPanelComponent },
  { path: 'detail/:name', component: CurrenciesDetailsComponent }
]

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
