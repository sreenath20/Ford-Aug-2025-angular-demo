import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
import { ReactiveFormRegistrationComponent } from './components/reactive-form-registration/reactive-form-registration.component';
// <app-root></app-root>
@Component({
  selector: 'app-root',
  imports: [UserComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {

}
// source - code behind

