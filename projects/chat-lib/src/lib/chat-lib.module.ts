import { NgModule } from '@angular/core';
import { ChatLibComponent } from './chat-lib.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageBottomBarComponent } from './chat-message-bottom-bar/chat-message-bottom-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChatLibComponent, ChatWindowComponent, ChatMessageListComponent, ChatMessageComponent, ChatMessageBottomBarComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ChatLibComponent, ChatLibComponent, ChatWindowComponent, ChatMessageListComponent,
    ChatMessageComponent, ChatMessageBottomBarComponent]
})
export class ChatLibModule { }
