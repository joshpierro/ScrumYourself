import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

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
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
