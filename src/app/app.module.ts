import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LearningComponent } from './learning/learning.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LearningDetailComponent } from './learning/learning-detail/learning-detail.component';
import { RouteDataResolver } from './route-data-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LearningComponent,
    NotFoundComponent,
    UserDetailComponent,
    WelcomeComponent,
    LearningDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RouteDataResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
