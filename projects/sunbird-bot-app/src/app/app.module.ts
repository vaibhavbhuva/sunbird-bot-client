import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChatLibModule, ChatLibService} from 'chat-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
