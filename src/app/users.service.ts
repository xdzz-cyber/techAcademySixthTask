import { Injectable } from '@angular/core';
import {UsersInterface} from "./users/users.interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UsersInterface[]>{
    return this.httpClient
      .get<UsersInterface[]>('https://my-json-server.typicode.com/xdzz-cyber/jsonPlaceHolderDummyDataServer/users')
  }
  createUser(newUser: UsersInterface): Observable<UsersInterface> {
    return this.httpClient
      .post<UsersInterface>('https://my-json-server.typicode.com/xdzz-cyber/jsonPlaceHolderDummyDataServer/users', {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber
      })
  }

  deleteUser(id: number): Observable<object> {
    return this.httpClient
      .delete<object>(`https://my-json-server.typicode.com/xdzz-cyber/jsonPlaceHolderDummyDataServer/users/${id}`)
  }
}
