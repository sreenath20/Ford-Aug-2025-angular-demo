import { Component } from '@angular/core';
import { User } from '../../model/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  user: User = { name: '', email: '', password: '' };
  confirmPwd:string='';

  onSubmit(form:any){
    console.log('Form submitted',this.user);

  }
}
