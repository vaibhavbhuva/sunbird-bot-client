import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  @Input() collapsed = true;
  @Input() did: string;
  @Input() userId: string;
  @Input() channel: string;
  @Input() appId: string;

  constructor() { }

  ngOnInit() {
  }

  expandChatIntent() {
    this.collapsed = false;
  }
  collapseChatIntent() {
    this.collapsed = true;
  }

}
