import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  @Input() collapsed:boolean = true;
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
