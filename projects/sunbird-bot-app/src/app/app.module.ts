import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChatLibModule, ChatLibService} from 'chat-lib';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatLibModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
