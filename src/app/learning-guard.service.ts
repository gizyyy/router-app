import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LearningComponent } from './learning/learning.component';
import { LearningService } from './learning/learning.service';

@Injectable({
  providedIn: 'root',
})
export class LearningGuardService implements CanDeactivate<LearningComponent> {
  constructor(private learningService: LearningService) {}
  canDeactivate(
    component: LearningComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.learningService.getLearningList().length > 1) {
      return !confirm('maybe you could stay here?');
    } else {
      return true;
    }
  }
}
