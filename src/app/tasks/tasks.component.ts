import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit {

  constructor(private tasksService:TasksService)  {

  }

  ngOnInit() {

  }

  getTask(task){
    console.log(task)
  }

}
