
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatLibService {

  baseUrl: string = 'https://chatapi.diksha.gov.in/bot';

  http: HttpClient;
  public chatList = [];
  public UUID ;
  public did;
  constructor(http: HttpClient) {
    this.http = http;
  }

  chatpost(req?: any): Observable<any> {
    if(!this.did) {
      this.did = Date.now();
    }
    req.data['uuid'] = this.UUID;
    req.data['From'] = (this.did).toString();
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
