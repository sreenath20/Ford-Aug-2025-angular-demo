import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  isbn: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:8080/books';
  constructor(private http: HttpClient) { }


  getAllBooks(): Observable<Book[]> {

    return this.http.get<Book[]>(`${this.baseUrl}/all`);  // http://localhost:8080/books/all
  }


}
