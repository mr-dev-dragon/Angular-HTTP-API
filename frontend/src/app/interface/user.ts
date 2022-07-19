import { Coordinate } from "./coordinate";

export interface User {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  gender: string;
  address: string;
  dateOfBirth: string;
  phone: string;
  imageUrl: string;
  coordinate: Coordinate;
}




// export interface Result {
//   gender: string;
//   name: Name;
//   location: Location;
//   email: string;
//   login: Login;
//   dob: Dob;
//   registered: Registered;
//   phone: string;
//   cell: string;
//   id: Id;
//   picture: Picture;
//   nat: string;
// }

// export interface Name {
//   title: string;
//   first: string;
//   last: string;
// }

// export interface Location {
//   street: Street;
//   city: string;
//   state: string;
//   country: string;
//   postcode: number;
//   coordinates: Coordinates;
//   timezone: Timezone;
// }

// export interface Street {
//   number: number;
//   name: string;
// }

// export interface Coordinates {
//   latitude: string;
//   longitude: string;
// }

// export interface Timezone {
//   offset: string;
//   description: string;
// }

// export interface Login {
//   uuid: string;
//   username: string;
//   password: string;
//   salt: string;
//   md5: string;
//   sha1: string;
//   sha256: string;
// }

// export interface Dob {
//   date: string;
//   age: number;
// }

// export interface Registered {
//   date: string;
//   age: number;
// }

// export interface Id {
//   name: string;
//   value: string;
// }

// export interface Picture {
//   large: string;
//   medium: string;
//   thumbnail: string;
// }

// export interface Info {
//   seed: string;
//   results: number;
//   page: number;
//   version: string;
// }
