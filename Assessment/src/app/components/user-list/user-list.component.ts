import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from 'src/app/services/users/users.service';
import { UserCreateComponent } from '../user-create/user-create.component';
import { MatDialog } from '@angular/material/dialog';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { Router } from '@angular/router';

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
  pageEvent: PageEvent;
  breakpoint: any;

  constructor(private usersService: UsersService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
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
  onPaginate(event: any) {
    this.getUsers(event.pageIndex + 1);
  }

  openCreateDialog(): void {
    this.dialog.open(UserCreateComponent, {
      width: '500px',
      data: {},
    });
  }

  openDeleteDialog(user): void {
    this.dialog.open(UserDeleteComponent, {
      width: '500px',
      data: user,
    });
  }

  updateUser(user) {
    this.router.navigate([`/users/update/${user.id}`]);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
