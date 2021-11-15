import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user = {
    name: '',
    job: ''
  };
  submitted = false;

  constructor(private usersService: UsersService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UserCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  createUser(): void {
    const data = {
      name: this.user.name,
      job: this.user.job
    };

    this.usersService.createUser(data)
      .subscribe(
        response => {
          this.submitted = true;
          this.dialogRef.close();
          this._snackBar.open('User Created Successfully', 'OK', {
            duration: 5000
          });
        },
        error => {
          console.log(error);
        });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
