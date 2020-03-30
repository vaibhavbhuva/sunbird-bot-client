
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatLibService {

  baseUrl: string = 'http://52.173.240.27:4000/bot';

  http: HttpClient;
  public chatList = [];
  public UUID ;
  constructor(http: HttpClient) {
    this.http = http;
    this.UUID = Date.now();
  }

  chatpost(req?: any): Observable<any> {
    req.data['From'] = (this.UUID).toString();
    return this.http.post(this.baseUrl, req.data).pipe(
      mergeMap((data: any) => {
        if (data.responseCode !== 'OK') {
          return observableThrowError(data);
        }
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
}
