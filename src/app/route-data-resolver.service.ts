import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Injectable({ providedIn: 'root' })
export class RouteDataResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<User> | Promise<User> | User {
    const id = +route.params['id'];
    return this.userService.getUser(id);
  }
}
