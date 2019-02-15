import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrenciesPanelComponent } from './currencies-panel/currencies-panel.component';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrenciesPanelComponent,
    CurrenciesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
