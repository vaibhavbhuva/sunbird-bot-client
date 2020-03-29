import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ChatRequest} from '../model/request';
import {catchError, map, mergeMap, scan} from 'rxjs/operators';
import {ChatResponse} from '../model/response';
import {Observable, of, Subject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ChatLibService {
  public requestStream: Subject<ChatRequest> = new Subject();
  public responseStream: Observable<ChatResponse[]>;
  public messageForm = new FormGroup({
    message: new FormControl('', Validators.required)
  });
  constructor(
    private http: HttpClient
  ) {
    this.responseStream = this.requestStream.pipe(
      mergeMap((request) => {
        return this.invokeApi(request);
      }),
      scan((acc: any, curr: any) => {
        acc.push(curr);
        return acc;
      }, [])
    );
  }

  sendMessage() {
    this.requestStream.next({
      body: this.messageForm.get('message').value,
      from: 'AC6436e7066283ef84c88a05392cc0fcd6'
    });
  }

  invokeApi(request: ChatRequest): Observable<ChatResponse> {
    return this.http.post('http://52.173.240.27:4000/bot', request, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    }).pipe(
      map((response) => {
        console.log(response);
        return {
          body: response
        };
      }),
      catchError(err => {
        console.error(err);
        return of({
          body: 'Unknown Error'
        });
      })
    );
  }
}
