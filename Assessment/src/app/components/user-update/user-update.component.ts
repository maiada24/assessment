import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  id: any;
  errorMsg: "";
  user: any;

  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar) { }

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

  updateUser() {
    const data = {
      name: this.user.last_name,
      job: this.user.job
    };

    this.usersService.updateUser(this.id, data)
      .subscribe(
        response => {
          this.router.navigate(['/users']);
          this._snackBar.open('User Updated Successfully', 'OK', {
            duration: 5000
          });
        },
        error => {
          console.log(error);
        });
  }
}
