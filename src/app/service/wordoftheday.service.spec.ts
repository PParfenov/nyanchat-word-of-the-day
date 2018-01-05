import { TestBed, inject } from '@angular/core/testing';
import { WordOfTheDayService } from './wordoftheday.service';
import { WordOfTheDay } from './../models/wordoftheday';

describe('WordOfTheDayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordOfTheDayService]
    });
  });

  it('should be created', inject([WordOfTheDayService], (service: WordOfTheDayService) => {
    expect(service).toBeTruthy();
  }));

  describe('getWordOfTheDay()', () => {
    it('should get wotd from 2018-01-01, qualtagh', inject([WordOfTheDayService], (service: WordOfTheDayService) => {
      let wordOfTheDay: WordOfTheDay;
      service.getWordOfTheDay(new Date(2018, 1, 1)).subscribe(wotd => this.wordOfTheDay = wotd);
      expect(wordOfTheDay.word).toEqual('qualnagh');
    }));
});
});
