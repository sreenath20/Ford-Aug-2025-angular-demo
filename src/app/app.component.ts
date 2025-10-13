import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule, NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Product } from './model/Products';
import { HighlightDirective } from './utils/highlight.directive';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { StarPipe } from './pipes/star.pipe';
import { SquarePipe } from './pipes/sqare.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { RegistrationComponent } from './components/registration/registration.component';
// <app-root></app-root>
@Component({
  selector: 'app-root',
  imports: [RegistrationComponent,SortPipe, SearchPipe, SquarePipe, StarPipe, UserComponent, AdminComponent, RouterOutlet, FormsModule, CommonModule, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  // student-list.component.ts
  students = [
    { name: 'Ravi', marks: 85 },
    { name: 'Anita', marks: 92 },
    { name: 'Kiran', marks: 78 },
    { name: 'Suman', marks: 88 }
  ];
  today: number = Date.now();
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  pi: number = 3.14159265359;
  value = 345.567;
  a: number = 0.259;
  b: number = 1.3495;
  companyName: string = "ford india";

  userSelectedColor = "red";
  isActive: boolean = false;
  textColor = "orange";
  fontSize = 10;
  userType: string = "";
  isAdmin = false;

  fruits: string[] | null = ['Apple', 'Orange', 'Kiwi'];// null;

  products: Product[] = []; // #1000
  constructor() {
    this.products.push({
      id: 1,
      name: 'Hp Laptop',
      price: 900,
      inStock: true
    });
    this.products.push({ id: 22, name: 'Dell Laptop 2', price: 500, inStock: true });
    this.products.push({ id: 3, name: 'Mouse 3', price: 300, inStock: false });
    this.products.push({ id: 44, name: 'Key board 4', price: 100, inStock: true });
  }
  searchText: string = '';
  userQuery: string = '';
  searcProduct() {
    this.searchText = this.userQuery;
  }
  addProduct() {
    let newProduct = {
      id: 99,
      name: 'Acer Laptop',
      price: 700,
      inStock: true
    };
    // push will not be detected by Angular pure pipe
    // this.products.push(newProduct);
    // create new array containg existing products + newproduct[ ... is a spread operator in JS]
    this.products = [...this.products, newProduct];//#2000
    console.log(this.products);


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

