import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-book',
  imports: [CommonModule],
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.css'
})
export class ListBookComponent implements OnInit {
  successMsg: string = '';
  errorMsg: string = '';

  // 1. allocated memory
  books: Book[] = []; // allocate memory for book type collection
  // injects dependencies
  // initilise some of data memebers
  constructor(
    private bookService: BookService,
    private router: Router) {

  }
  // executed after constructor
  ngOnInit(): void {
    this.loadBooks();
  }
  loadBooks() {
    this.bookService.getAllBooks().subscribe(
      {
        // next arrow function is a callback and it will 
        // get executed when server returns successful response 
        // i.e HTTPstatus code is b/w 200 to 299
        next: data => this.books = data,
        error: error => console.log(error),
        complete: () => console.log("Received all data with out errors.")
      }
    );
  }
  updateBookById(bookId?: number) {
    this.router.navigate(['books/edit', bookId]);
  }
  deleteBookById(book: Book) {
   
    this.bookService.deleteBookByAuthorEmail(book).subscribe(
      {
          next: data => {
            console.log(data);
            this.successMsg = "Book Deleted !";
            this.errorMsg = ''; // disable error message
          },
          error: err => {
            console.log(err);
            this.successMsg = ''; // disable success message
            this.errorMsg = `Book could not be deleted ! : ${err.error}`;
          }
      }
    )
  }

}
