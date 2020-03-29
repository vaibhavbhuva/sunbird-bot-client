import { Component, OnInit } from '@angular/core';
import { ChatLibService } from '../chat-lib.service';
@Component({
  selector: 'lib-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class ChatMessageListComponent implements OnInit {
  public array = [
    // {
    //   type: 'sent',
    //   text: 'Hey how you are doing! '
    // },
    // {
    //   type: 'recieved',
    //   text: 'I am doing good'
    // },
    // {
    //   type: 'recieved',
    //   text: 'What help do you need!'
    // },
    // {
    //   type: 'sent',
    //   text: 'need help on COVID-19'
    // },
    // {
    //   type: 'recieved',
    //   text: 'SOme logn text here! asiudh haisu dhiaus hdiuahs iduahsi duahisud haisud hiaushdi uadi uahsiduha siudhai sudhiaus hdiuhaisudh aisu'
    // }
  ];

  constructor(public chatService: ChatLibService) { }

  ngOnInit() {
    this.array = this.chatService.chatList;

  }

}
