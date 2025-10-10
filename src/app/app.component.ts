import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule, NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Product } from './model/Products';
import { HighlightDirective } from './utils/highlight.directive';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { StarPipe } from './pipes/star.pipe';
// <app-root></app-root>
@Component({
  selector: 'app-root',
  imports: [StarPipe,UserComponent ,AdminComponent,RouterOutlet, FormsModule,CommonModule, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass,HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  today: number = Date.now();
   object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  pi: number = 3.14159265359;
  value=345.567;
  a: number = 0.259;
  b: number = 1.3495;
  companyName:string="ford india";

  userSelectedColor = "red";
  isActive: boolean = false;
  textColor = "orange";
  fontSize = 10;
  userType: string = "";
  isAdmin=false;

  fruits: string[] | null = ['Apple', 'Orange', 'Kiwi'];// null;

  products: Product[] = [];
  constructor() {
    this.products.push({
      id: 1,
      name: 'Laptop',
      price: 100,
      inStock:true
    });
    this.products.push({ id: 22, name: 'Laptop 2', price: 200,inStock:true });
    this.products.push({ id: 3, name: 'Laptop 3', price: 300,inStock:false });
    this.products.push({ id: 44, name: 'Laptop 4', price: 400,inStock:true });
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

