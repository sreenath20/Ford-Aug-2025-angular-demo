import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
// <app-root></app-root>
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  imageUrl = "favicon.ico";
  title: string = 'bookapp';
  url: string = 'http://www.google.com';
  name: string = "Ford";
  isSubscribed=true;
  gender = "Male";

  logInfo() {
    console.log("Logging info !");
  }
  changeImage() {
    if (this.imageUrl == "favicon.ico")
      this.imageUrl = "ford.jpg";
    else
      this.imageUrl = "favicon.ico";

  }
}
// source - code behind