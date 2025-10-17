import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  id?: number;
  title: string;
  isbn: string;
}
export interface Author {
  id?: number;
  name: string;
  email: string;
  nationality: string;
  books: Book[];
}
// creates object of BookService as singleton
@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseBooksUrl = 'http://localhost:8080/books';
  baseAuthorsUrl = 'http://localhost:8080/authors';
  constructor(private http: HttpClient) { }


  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseBooksUrl}/all`);  // http://localhost:8080/books/all
  }
  createBookByAuthorEmail(authorEmail: string, newBook: Book): Observable<Author> {
    return this.http.post<Author>(`${this.baseAuthorsUrl}/${authorEmail}/books`, newBook);
  }


}
