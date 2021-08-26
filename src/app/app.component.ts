import { Component, VERSION } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  dob: any = '';
  constructor() {}
  checkDate() {
    const dateSendingToServer = new DatePipe('en-US').transform(
      this.dob,
      'dd/MM/yyyy'
    );
    console.log(dateSendingToServer);
  }
}
