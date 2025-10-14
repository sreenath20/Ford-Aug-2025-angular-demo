import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  users = [
    { id: 1, name: 'Ravi', marks: 85 },
    { id: 2, name: 'Anita', marks: 92 },
    { id: 3, name: 'Kiran', marks: 78 },
    { id: 4, name: 'Suman', marks: 88 }
  ];
  // when constructor argument has visibility modified they will 
  // become data members of class
  constructor(private router: Router) {
    this.router = router;
  }

  gotoUser(id: number) {
    this.router.navigate(['/user', id]);
  }

}
