import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WordOfTheDayComponent } from './wordoftheday/wordoftheday.component';
import { WordOfTheDayService } from './service/wordoftheday.service';


@NgModule({
  declarations: [
    AppComponent,
    WordOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WordOfTheDayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
