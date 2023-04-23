import { Injectable } from '@angular/core';
import {UsersInterface} from "./users/users.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: UsersInterface[] = [
    {
      id: 1,
      firstName: 'Leanne',
      lastName: 'Bret',
      email:'Sincere@april.biz',
      phone:'1-770-736-9021x x 67432'
    },
    {
      id: 2,
      firstName: 'Jack',
      lastName: 'Yeah',
      email:'Sincere@march.biz',
      phone:'1-770-322-9021x x 67432'
    },
    {
      id: 3,
      firstName: 'London',
      lastName: 'Bret',
      email:'Sincere@april.biz',
      phone:'1-770-736-9021x x 67432'
    },
    {
      id: 4,
      firstName: 'Madrid',
      lastName: 'Bret',
      email:'Sincere@april.biz',
      phone:'1-770-736-9021x x 67432'
    },
    {
      id: 5,
      firstName: 'Joke',
      lastName: 'Bret',
      email:'Sincere@april.biz',
      phone:'1-770-736-9021x x 67432'
    },
  ]
  constructor() { }

  getUsers(): Observable<UsersInterface[]>{
    return of(this.users)
  }
}
