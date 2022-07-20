import { Info } from './../../interface/info';
import { Response } from './../../interface/response';
import { User } from './../../interface/user';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl: string = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) { }

  getUsers(size: number = 15) {
    return this.http.get(`${this.apiUrl}/?results=${size}`)
      .pipe(map((response:any) => this.pro_Res(response)));


  }

  getUser(uuid: number = 1) {
    return this.http.get(`${this.apiUrl}/?uuid=${uuid}`)
          .pipe(map((response:any) => this.pro_Res(response)));
  }
  private pro_Res(response: Response): Response {
    return {
      info: { ...response.info },
      results: response.results.map((user: any) => (<User>{
        uuid: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        username: user.login.username,
        gender: user.gender,
        address: `${user.location.street.number} ${user.location.street.name} ${user.user.location.city}, ${user.location.country}`,
        dateOfBirth: user.dob.date,
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinate: { latitude: +user.location.coordinates.latitude, logitude: +user.location.coordinates.logitude }

      }))}
  }
}
