import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from 'src/app/services/users.service';
import { UserCreateComponent } from '../user-create/user-create.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any = [];
  length: number;
  pageSize: number;
  pageSizeOptions: number[] = [6];

  // MatPaginator Output
  pageEvent: PageEvent;
  breakpoint:any;

  constructor(private usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
    this.breakpoint = (window.innerWidth <= 760) ? 2 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 760) ? 2 : 4;
  }

  getUsers(page = 1): void {
    this.usersService.getAllUsers(page)
      .subscribe(
        users => {
          this.users = users.data;
          this.length = users.total;
          this.pageSize = users.per_page;
        },
        error => {
          console.log(error);
        });
  }

  //get users at selected page
  onPaginate(event) {
    this.getUsers(event.pageIndex + 1);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      width: '500px',
      data: {name: "", job: ""},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
