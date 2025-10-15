import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private comapnayName = "Ford India"; // memory for synchronous communication
  // RxJS BehaviorSubject for asynchronous communication
  private messageSource = new BehaviorSubject<string>('Ford India');
  currentMessageObservable = this.messageSource.asObservable();  
  constructor() { }

  getCompanyName(): string {
    return this.comapnayName;
  }
  setComanyName(newName: string): void {
    this.comapnayName = newName;
    // publish new message
    this.messageSource.next(this.comapnayName);
  }
}
