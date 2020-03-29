import { Component, OnInit, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject} from 'rxjs';
import { ChatLibService } from '../chat-lib.service';

@Component({
  selector: 'lib-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  @Input() collapsed:boolean = true;

  public unsubscribe$ = new Subject<void>();
  
  constructor(public chatService: ChatLibService) { }

  ngOnInit() {
  }

  expandChatIntent() {
    this.collapsed = false;
    const req = {
      data: 'hi'
    }
    this.chatService.chatpost().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      console.log(data)
      this.chatService.chatListPush('bot', data)
    });
  }
  collapseChatIntent() {
    this.collapsed = true;
  }

}
