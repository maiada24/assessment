import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id: any;
  user: any;
  errorMsg: "";

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getUserData(this.id);
  }

  getUserData(id): void {
    this.usersService.getUser(id)
      .subscribe(
        user => {
          this.user = user.data;
        },
        error => {
          console.log(error);
          this.errorMsg = error;
        });
  }
}
