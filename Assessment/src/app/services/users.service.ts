import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://reqres.in/api';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(page): Observable<any> {
    return this.httpClient.get(baseURL + '/users?page=' + page);
  }

  getUser(id): Observable<any> {
    return this.httpClient.get(`${baseURL}/users/${id}`);
  }

  createUser(data): Observable<any> {
    return this.httpClient.post(`${baseURL}/users`, data);
  }

  updateUser(id, data): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  deleteUser(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }
}
