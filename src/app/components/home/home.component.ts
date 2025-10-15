import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  companyName='';
  users = [
    { id: 1, name: 'Ravi', marks: 85 },
    { id: 2, name: 'Anita', marks: 92 },
    { id: 3, name: 'Kiran', marks: 78 },
    { id: 4, name: 'Suman', marks: 88 }
  ];
  // when constructor argument has visibility modified they will 
  // become data members of class
  constructor(private router: Router, private userService:UserService) {
    this.router = router;

  }
  ngOnInit(): void {
   this.companyName = this.userService.getCompanyName();
  }

  gotoUser(id: number) {
    this.router.navigate(['/user', id]);
  }

  changeCompanyName(){
    this.userService.setComanyName(this.companyName);
  }

}
