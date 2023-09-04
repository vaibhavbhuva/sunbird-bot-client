import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.botName;
  botConfig = {
    header: environment.botName,
    chatbotUrl: environment.apiUrl,
    uuid: environment.uuid
  }
}
