import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { User } from '../interface/user';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getusers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getuser(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/1');
  }
}
