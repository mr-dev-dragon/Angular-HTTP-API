import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl: string = 'https://randomuser.me/api/';
  constructor( private  http : HttpClient) {}
}
