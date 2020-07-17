
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatLibService {

  http: HttpClient;
  public chatList = [];
  public userId ;
  public did;
  public appId;
  public channel;
  public chatbotUrl;
  public context;

  constructor(http: HttpClient) {
    this.http = http;
  }

  chatpost(req?: any): Observable<any> {
    if(!this.did) {
      this.did = Date.now();
    }
    req.data['userId'] = this.userId;
    req.data['appId'] = this.appId;
    req.data['channel'] = this.channel;
    req.data['From'] = (this.did).toString();
    req.data['context'] = this.context;
    
    return this.http.post(this.chatbotUrl, req.data).pipe(
      mergeMap((data: any) => {
        return observableOf(data);
      }));
  }
  chatListPush(source, msg) {
    const chat = {
      'text': msg,
      'type': source
    }
    this.chatList.push(chat);
  }

  chatListPushRevised(source, msg) {
    if(msg.data.button){
      for(var val of msg.data.buttons){ 
        val.disabled = false
      }
    }
   
    const chat = {
      'buttons': msg.data.buttons,
      'text': msg.data.text,
      'type': source
    }
    this.chatList.push(chat);
  }

  disableButtons() {
    var btns =  this.chatList[this.chatList.length-1].buttons
    for(var val of btns){
      val.disabled = true
    }
  }
}
