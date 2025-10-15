import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  // data mebers
  id?: string | null;
  companyName: string = '';

  constructor(private route: ActivatedRoute, private userService: UserService) {
    // data member initialization;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    // one time fetch company name from service 
    this.companyName = this.userService.getCompanyName();
    // Subscribe to chnage in company name
    // this.userService.currentMessageObservable
    //   .subscribe(
    //     message => this.companyName = message
    // );
  }

}
