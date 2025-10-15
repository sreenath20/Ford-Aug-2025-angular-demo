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

  books:Book[]=[]; // allocate memory for book type collection

  constructor(private bookService:BookService){}
 
  ngOnInit(): void {
      this.loadBooks();
  }
  loadBooks(){
    this.bookService.getAllBooks().subscribe(
      data=>this.books=data
    )
  }

}
