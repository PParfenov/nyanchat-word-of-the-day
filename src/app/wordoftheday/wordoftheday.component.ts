import {Component, Input, OnInit} from '@angular/core';
import { WordOfTheDayService } from './../service/wordoftheday.service';
import {WordOfTheDay} from './../models/wordoftheday';

@Component({
  selector: 'app-wordoftheday',
  templateUrl: './wordoftheday.component.html',
  styleUrls: ['./wordoftheday.component.css']
})
export class WordOfTheDayComponent implements OnInit {

 public wordOfTheDay: WordOfTheDay;

  constructor(private wordOfTheDayService: WordOfTheDayService) { }

  ngOnInit() {
    this.wordOfTheDayService.getWordOfTheDay(new Date()).subscribe(wotd => this.wordOfTheDay = wotd);
  }

}
