import { Component } from '@angular/core';
import {WordofthedayService} from './wordoftheday/wordoftheday.service';
import {Wordoftheday} from './wordoftheday/wordoftheday';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  wordOfTheDay: Wordoftheday = null;
  title = 'app';
  constructor(private wordOftheDayService: WordofthedayService) {

  }

  onClick() {
    this.wordOftheDayService.getWordOfTheDay().subscribe(s => {
      this.wordOfTheDay = s;
      console.log(this.wordOfTheDay);
    });
  }

}
