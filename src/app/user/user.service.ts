import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList: Array<User> = [
    { id: 1, name: 'gizem', email: 'gizemyilmaz@gmail.com' },
    { id: 2, name: 'songul', email: 'songulyilmaz@gmail.com' },
  ];

  returnUser: User;

  constructor() {}

  getUsers(): User[] {
    return this.userList;
  }

  getUser(id: number): User {
    this.returnUser = null;
    this.userList.forEach((element: User) => {
      if (element.id === id) {
        this.returnUser = element;
      }
    });
    return this.returnUser;
  }

  addUser(user: User) {
    this.userList.push(user);
  }
}
