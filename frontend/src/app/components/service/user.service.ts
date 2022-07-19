import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl: string = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {}

  getUSers(size: number = 15) {
    return this.http.get(`${this.apiUrl}/?results=${size}`);
  }

  getUSer(uuid: number = 1) {
    return this.http.get(`${this.apiUrl}/?uuid=${uuid}`);
  }
}
