
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export class ChatLibService {

  baseUrl: string = 'http://52.173.240.27:4000/bot';

  http: HttpClient;
  public chatList = [];

  constructor(http: HttpClient) {
    this.http = http;
  }

  chatpost(req?: any): Observable<any> {
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
      'msg': msg,
      'source': source
    }
    this.chatList.push(chat);
  }
}
