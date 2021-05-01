import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [ButtonModule, CalendarModule, PanelModule],
  exports: [ButtonModule, CalendarModule, PanelModule],
})
export class PrimeNgImports {}
