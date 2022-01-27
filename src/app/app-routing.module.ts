import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningGuardService } from './learning-guard.service';
import { LearningDetailComponent } from './learning/learning-detail/learning-detail.component';
import { LearningComponent } from './learning/learning.component';
import { Learning } from './learning/learning.model';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouteDataResolver } from './route-data-resolver.service';
import { UserCountGuardService } from './user-count-guard.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { User } from './user/user.model';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  //sayfaya sadece host ile geldiginde redirect yapiyor, localhost:4200 oluyor
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'users',
    component: UserComponent,
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        canActivate: [UserCountGuardService],
        resolve: { user: RouteDataResolver },
      },
    ],
  },
  {
    path: 'learnings',
    component: LearningComponent,
    canDeactivate: [LearningGuardService],
    children: [
      {
        path: ':id',
        component: LearningDetailComponent,
        data: Learning,
      },
    ],
  },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: '**',
    component: NotFoundComponent,
    data: { message: 'Page not found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
