import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FactListComponent } from './fact-list/fact-list.component';
import { RandomFactsComponent } from './random-facts/random-facts.component';
import { PrimeNgImports } from './primeng-import/primeng-import.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    FactListComponent,
    RandomFactsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PrimeNgImports,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
