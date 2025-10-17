import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-book',
  imports: [CommonModule],
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.css'
})
export class ListBookComponent implements OnInit {
  // 1. allocated memory
  books: Book[] = []; // allocate memory for book type collection
  // injects dependencies
  // initilise some of data memebers
  constructor(private bookService: BookService) {

  }
  // executed after constructor
  ngOnInit(): void {
    this.loadBooks();
  }
  loadBooks() {
    this.bookService.getAllBooks().subscribe(
      {
        next: data => this.books = data,
        error: error => console.log(error),
        complete: () => console.log("Received all data with out errors.")
      }
      // array function is a callback and it will 
      // get executed when server returns sucssful resonse 
      // i.e HTTPstatus code is b/w 200 to 299



    )
  }

}
