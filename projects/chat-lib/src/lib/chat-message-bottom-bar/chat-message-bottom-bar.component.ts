import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject} from 'rxjs';
import { ChatLibService } from '../chat-lib.service';

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
  public unsubscribe$ = new Subject<void>();
  constructor(public chatService: ChatLibService) {
  }

  ngOnInit() {
    //this.initialiseForm();
  }
  // initialiseForm () {
  //   this.messageForm = new FormGroup({
  //     message: new FormControl('', Validators.required)
  //   });
  // }
  sendMessage() {
    let msg = this.messageForm.controls.message.value;
    if(msg) { 
      console.log("msg in bottom-bar-->",msg)
      this.chatService.chatListPush('sent',msg);
      this.messageForm.controls.message.reset();
      const req = {
        data: {
          Body: msg
          }
        }
        console.log("calling from bottom-bar-->")
      this.chatService.chatpost(req).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
        console.log("data in bottom bar-->",data)
        this.chatService.chatListPushRevised('recieved', data)
      },err => {
        console.log("error in bottom bat-->",err)
        this.chatService.chatListPushRevised('recieved', err.error)
      });
    }
    }
}
