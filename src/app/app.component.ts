import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TasksService} from "./tasks.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrumyourself.com';
  area='list';

  constructor(private router: Router,private tasksService:TasksService) {
  }

}
