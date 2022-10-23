import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Vlad";

  user = {
    email: "super@gmail.com",
    country: "Ukraine"
  }
}
