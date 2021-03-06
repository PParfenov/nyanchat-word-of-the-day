import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {WordOfTheDay} from './../models/wordoftheday';

@Injectable()
export class WordOfTheDayService {

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private wotdURL = 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?date=';
  private wotdAPIkey = '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

  constructor(private http: HttpClient) { }

  getWordOfTheDay(date: Date): Observable<WordOfTheDay> {
    const currentDate = date.toISOString().toString().substring(0, 10);
    const endPoint = this.wotdURL + currentDate + this.wotdAPIkey;
    return this.http.get<WordOfTheDay>(endPoint);
  }


}
