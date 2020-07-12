
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
    console.log("this.chatbotUrl-->", this.chatbotUrl)
    
    return this.http.post(this.chatbotUrl, req.data).pipe(
      mergeMap((data: any) => {
        console.log("requets in service-->",req)
        console.log("data in service-->",data)
        // if (data.responseCode !== 'OK') {
        //   console.log("reesponse NOK")
        //   return observableThrowError(data);
        // }
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
    console.log("msg-->",msg)
    console.log("buttons-->",msg.data.buttons)
    console.log("text-->",msg.data.text)
    console.log("length-->", msg.data.buttons?msg.data.buttons.length:0)
    console.log("1st button",msg.data.buttons[0])
    const chat = {
      'buttons': msg.data.buttons,
      'text': msg.data.text,
      'type': source
    }
    this.chatList.push(chat);
  }
}
