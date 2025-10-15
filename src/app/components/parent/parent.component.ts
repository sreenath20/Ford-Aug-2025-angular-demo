import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  cityName='Chennai';
  childMessage='';
  receiveMessage(msg:string){
    this.childMessage=msg;
  }
}
