import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageBottomBarComponent } from './chat-message-bottom-bar/chat-message-bottom-bar.component';
import { ChatLibService } from './chat-lib.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChatWindowComponent, ChatMessageListComponent, ChatMessageComponent, ChatMessageBottomBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers : [ChatLibService],
  exports: [ChatWindowComponent, ChatMessageListComponent, ChatMessageComponent, ChatMessageBottomBarComponent]
})
export class ChatLibModule { }
