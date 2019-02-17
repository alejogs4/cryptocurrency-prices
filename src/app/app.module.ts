import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrenciesPanelComponent } from './currencies-panel/currencies-panel.component';
import includes from './currencies-panel/includes.pipe'
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrenciesPanelComponent,
    CurrenciesListComponent,
    includes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
