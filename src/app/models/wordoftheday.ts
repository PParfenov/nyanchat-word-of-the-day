import {Example} from './example';
import {Definition} from './definition';

export class WordOfTheDay {

constructor(public word: string, public examples: Example[], public definitions: Definition[]) {
  }
}

