import { Component, OnInit } from '@angular/core';
import { FactService } from '../service/fact.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  date: Date;
  constructor(private faceService: FactService) {}

  ngOnInit(): void {}
  onDateSelect(value: Date) {
    //console.log(value);
    this.faceService.getInput(value);
  }
}
