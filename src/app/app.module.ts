import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {TasksService} from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
