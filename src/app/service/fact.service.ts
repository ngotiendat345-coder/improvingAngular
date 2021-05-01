import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Fact } from '../modal/Fact';

@Injectable({
  providedIn: 'root',
})
export class FactService {
  private apiUrl = 'http://numbersapi.com/';
  private randomApiUrl = 'http://numbersapi.com/random/';
  private jsonQuery = '?json';
  public datePicked: EventEmitter<any> = new EventEmitter<any>();
  constructor(private http: HttpClient) {}

  getInput(dateInput: Date) {
    console.log(dateInput);
    this.datePicked.emit(dateInput);
  }
  getRandomFact(): Observable<Fact> {
    return this.http.get<Fact>(this.randomApiUrl + this.jsonQuery);
  }

  getDateFact(month: string, day: string): Observable<Fact> {
    return this.http.get<Fact>(
      `${this.apiUrl}${month}/${day}/date${this.jsonQuery}`
    );
  }
  getYearFact(year: string): Observable<Fact> {
    return this.http.get<Fact>(`${this.apiUrl}${year}/year${this.jsonQuery}`);
  }
}
