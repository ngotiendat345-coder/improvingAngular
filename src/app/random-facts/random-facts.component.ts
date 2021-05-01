import { Component, OnInit } from '@angular/core';
import { Fact } from '../modal/Fact';
import { FactService } from '../service/fact.service';

@Component({
  selector: 'app-random-facts',
  templateUrl: './random-facts.component.html',
  styleUrls: ['./random-facts.component.scss'],
})
export class RandomFactsComponent implements OnInit {
  constructor(private factService: FactService) {}
  public randomFact: Fact;
  ngOnInit(): void {
    this.factService.getRandomFact().subscribe(
      (data: Fact) => {
        console.log(data);
        this.randomFact = data;
      },
      (err: Error) => {
        console.log(err);
      }
    );
    setInterval(() => {
      this.factService.getRandomFact().subscribe(
        (data: Fact) => {
          console.log(data);
          this.randomFact = data;
        },
        (err: Error) => {
          console.log(err);
        }
      );
    }, 5000);
  }
}
