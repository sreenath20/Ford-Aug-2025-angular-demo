import { Component, OnInit } from '@angular/core';
import { Author, Book, BookService } from '../../service/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './books-form.component.html',
  styleUrl: './books-form.component.css'
})
export class BooksFormComponent implements OnInit {
  isEditMode = false;
  successMsg: string = '';
  errorMsg: string = '';

  newBook: Book = { title: '', isbn: '' };
  authorEmail: string = '';
  authorObservable?: Observable<Author>;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute) {
    // get Author email from local staorage / login service
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      // fetch book data from back end
      this.bookService.getBookById(id).subscribe(data => this.newBook = data);
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.bookService.editBookByAuthorEmail(this.authorEmail, this.newBook).
        subscribe(
          {
           next: data => {
            console.log(data);
            this.successMsg = "Book Updated !";
            this.errorMsg = ''; // disable error message
          },
          error: err => {
            console.log(err);
            this.successMsg = ''; // disable success message
            this.errorMsg = `Book could not be updated ! : ${err.error}`;
          }
        }
        );
    }
    else {

      this.authorObservable = this.bookService.createBookByAuthorEmail(this.authorEmail, this.newBook);
      this.authorObservable.subscribe(
        {
          next: data => {
            console.log(data);
            this.successMsg = "Book added !";
            this.errorMsg = ''; // disable error message
          },
          error: err => {
            console.log(err);
            this.successMsg = ''; // disable success message
            this.errorMsg = `Book could not be added ! : ${err.error}`;
          }
        }
      );
    }

  }

}
