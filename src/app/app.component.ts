import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Product } from './model/Products';
// <app-root></app-root>
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgIf, NgFor, NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  userType:string="";

  fruits: string[] | null = ['Apple', 'Orange', 'Kiwi'];// null;

  products: Product[] = [];
  constructor() {
    this.products.push({
      id: 1,
      name: 'Laptop',
      price: 100
    });
    this.products.push({ id: 22, name: 'Laptop 2', price: 200 });
    this.products.push({ id: 3, name: 'Laptop 3', price: 300 });
    this.products.push({ id: 44, name: 'Laptop 4', price: 400 });
  }


  imageUrl = "favicon.ico";
  title: string = 'bookapp';
  url: string = 'http://www.google.com';
  name: string = "Ford";
  isSubscribed = true;
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

