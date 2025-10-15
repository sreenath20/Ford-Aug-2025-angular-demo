import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() city!:string;
  @Output() messageEvent= new EventEmitter<string>()

   childMessage=''; 
  sendMessage(){
    this.messageEvent.emit(this.childMessage);
  }
  // onCityChange(event:any){
  //   console.log('oncityChange',event.target.value);
  //   this.messageEvent.emit(event.target.value);
  // }
}
