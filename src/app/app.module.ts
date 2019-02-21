import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrenciesPanelComponent } from './currencies-panel/currencies-panel.component';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { Includes } from './currencies-panel/includes.pipe';
import { CurrenciesDetailsComponent } from './currencies-details/currencies-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrenciesPanelComponent,
    CurrenciesListComponent,
    Includes,
    CurrenciesDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
