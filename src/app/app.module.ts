import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { MessageComponent } from './message/message.component';
import { PostMessageComponent } from './post-message/post-message.component';
import { HeadingImageComponent} from './heading-image/heading-image.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessagesService} from './services/messages.service';
import {HttpClientModule} from '@angular/common/http';
import {WordofthedayService} from './wordoftheday/wordoftheday.service';
import {WordofthedayComponent} from './wordoftheday/wordoftheday.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    MessageComponent,
    PostMessageComponent,
    HeadingImageComponent,
    SidebarComponent,
    WordofthedayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MessagesService, WordofthedayService],
  bootstrap: [AppComponent]

})
export class AppModule { }
