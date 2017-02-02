import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {TasksService} from './tasks.service';
import { TaskComponent } from './task/task.component';

const routes =[
  {path:'',component:TasksComponent},
  {path:'task/:taskId',component:TaskComponent}
  ]


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
