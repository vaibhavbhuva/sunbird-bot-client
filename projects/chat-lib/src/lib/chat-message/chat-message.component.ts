import { Component, OnInit, Input } from '@angular/core';
import { ChatLibService } from '../chat-lib.service';
import { takeUntil } from 'rxjs/operators';
import { Subject} from 'rxjs';

@Component({
  selector: 'lib-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() data;
  public buttons = [];
  public isButtonAvailable:boolean = false;
  public unsubscribe$ = new Subject<void>();
  constructor(public chatService: ChatLibService) { 
  }

  ngOnInit() {
    console.log("data in chat-message-->",this.data);
    if(this.data.buttons) {
      this.isButtonAvailable = true;
      this.buttons = this.data.buttons
      console.log("buttons -->",this.buttons)
    }
    this.buttons = this.data.buttons?this.data.buttons:''
    // this.buttons = this.data.buttons;
    // console.log("buttons -->",this.buttons)
  }

  buttonClicked(indx, text){
    console.log("value of button-->",text)
    console.log("type->", typeof(text)
    )
    if(text === "First Menu"){
      console.log("inside if first menu")
      indx="0"
    }
    if(text === "Go Back"){
      console.log("inside if go back")
      indx="99"
    }
    // this.req = indx;
    // text=='Fist Menu'?indx=0:indx=indx;
    // text=='Go Back'?indx=99:indx=indx;
    console.log("text, indx", text, indx)
    const req = {
      data: {
        Body: indx
        }
      }
      
    console.log("calling service from chat-message")
    this.sendMessage(req)
  }
  sendMessage(req) {
    this.chatService.chatpost(req).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      console.log("data in chat-message -->",data)
      this.chatService.chatListPushRevised('recieved', data)
    },err => {
      console.log("error in bottom bat-->",err)
      this.chatService.chatListPushRevised('recieved', err.error)
    });
  }
}
