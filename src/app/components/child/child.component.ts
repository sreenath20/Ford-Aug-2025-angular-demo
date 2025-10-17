import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() city!: string;
  // angular binds city and cityChange automatically
  @Output() cityChange = new EventEmitter<string>()

  childMessage = '';
  sendMessage() {
    this.cityChange.emit(this.childMessage);
  }
  onCityChange(event: any) {
    console.log('oncityChange', event.target.value);
    this.cityChange.emit(event.target.value);
  }
}
