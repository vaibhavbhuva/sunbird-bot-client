import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
