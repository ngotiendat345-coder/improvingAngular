import { Component, OnInit } from '@angular/core';
import { Fact } from '../modal/Fact';
import { FactService } from '../service/fact.service';

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.scss'],
})
export class FactListComponent implements OnInit {
  constructor(private factService: FactService) {}
  public dateFact: Fact;
  public yearFact: Fact;
  ngOnInit(): void {
    this.factService.datePicked.subscribe((data: Date) => {
      //console.log(data);
      const month = data.getMonth().toString();
      const year = data.getFullYear().toString();
      const day = data.getDate().toString();
      this.factService.getDateFact(month, day).subscribe(
        (data: Fact) => {
          this.dateFact = data;
          console.log(data);
        },
        (err: Error) => {
          console.log(err);
        }
      );

      this.factService.getYearFact(year).subscribe(
        (data: Fact) => {
          console.log(data);
          this.yearFact = data;
        },
        (err: Error) => {
          console.log(err);
        }
      );
    });
  }
}
