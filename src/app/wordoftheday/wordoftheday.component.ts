import {Component, Input, OnInit} from '@angular/core';
import { WordofthedayService } from './wordoftheday.service';
import {Wordoftheday} from './wordoftheday';

@Component({
  selector: 'app-wordoftheday',
  templateUrl: './wordoftheday.component.html',
  styleUrls: ['./wordoftheday.component.css']
})
export class WordofthedayComponent implements OnInit {

 @Input()
 public wordOfTheDay: Wordoftheday;

  constructor() { }

  ngOnInit() {
  }

}
