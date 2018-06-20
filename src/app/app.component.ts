import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public getCurrentDateTime():Date{
    let date = new Date();
    return date;
  }
  date = this.getCurrentDateTime();
  
}
