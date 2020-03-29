import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lib-chat-message-bottom-bar',
  templateUrl: './chat-message-bottom-bar.component.html',
  styleUrls: ['./chat-message-bottom-bar.component.css']
})
export class ChatMessageBottomBarComponent implements OnInit {
  public messageForm = new FormGroup({
    message: new FormControl('', Validators.required)
  });
  message: any;
  constructor() { }

  ngOnInit() {
  }

}
