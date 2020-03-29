import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageBottomBarComponent } from './chat-message-bottom-bar/chat-message-bottom-bar.component';
import { ChatLibService } from './chat-lib.service';
@NgModule({
  declarations: [ChatWindowComponent, ChatMessageListComponent, ChatMessageComponent, ChatMessageBottomBarComponent],
  imports: [
    CommonModule
  ],
  exports: [ChatWindowComponent, ChatMessageListComponent, ChatMessageComponent, ChatMessageBottomBarComponent]
})
export class ChatLibModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChatLibModule,
      providers: [ChatLibService]
    };
  }
}
