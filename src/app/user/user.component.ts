import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userList: User[];

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
  }
}
