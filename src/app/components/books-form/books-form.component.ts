import { Component } from '@angular/core';
import { Author, Book, BookService } from '../../service/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './books-form.component.html',
  styleUrl: './books-form.component.css'
})
export class BooksFormComponent {
  successMsg: string = '';
  errorMsg: string = '';

  newBook: Book = { title: '', isbn: '' };
  authorEmail: string = '';
  authorObservable?: Observable<Author>;
  constructor(private bookService: BookService) {
    // get Author email from local staorage / login service
  }

  onSubmit() {
    this.authorObservable = this.bookService.createBookByAuthorEmail(this.authorEmail, this.newBook);
    this.authorObservable.subscribe(
      {
        next: data => {
          console.log(data);
          this.successMsg="Book added !";
          this.errorMsg='';
        },
        error: err => {
          console.log(err);
          this.successMsg='';
          this.errorMsg=`Book could not be added ! : ${err.error}`;
        }
      }
    );
  }

}
