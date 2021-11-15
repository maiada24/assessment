import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  userToDelete: any;
  submitted = false;

  constructor(private usersService: UsersService, private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UserDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.userToDelete = this.data;
  }

  deleteUser(): void {
    this.usersService.deleteUser(this.userToDelete.id)
      .subscribe(
        response => {
          this.submitted = true;
          this.dialogRef.close();
          this._snackBar.open('User Deleted Successfully', 'OK', {
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
