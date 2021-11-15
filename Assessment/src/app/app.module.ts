import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";

import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersService } from './services/users/users.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { HttpConfigInterceptor } from './services/interceptor/http-interceptor.service';
import { LoginComponent } from './components/login/login.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserDeleteComponent,
    LoginComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    UserCreateComponent
  ],
  entryComponents: [
    UserCreateComponent,
    UserDeleteComponent
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },
  { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
