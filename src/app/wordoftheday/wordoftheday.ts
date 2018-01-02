import {Example} from './Example-model';
import {Definition} from '@angular/compiler-cli';

export class Wordoftheday {

constructor(public word: string, public examples: Example[], public definitions: Definition[]) {
  }
}

