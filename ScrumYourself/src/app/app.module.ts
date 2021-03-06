import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from "./profile.service";
import {TaskService} from "./task.service";

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent,
    data: { title: 'My Tasks' },
  },
  { path: 'me',
    component: ProfileComponent,
    data: { title: 'Profile' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [ProfileService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
