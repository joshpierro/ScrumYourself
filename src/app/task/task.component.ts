import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: `./task.component.html`,
  styles: []
})
export class TaskComponent implements OnInit {

  task: any;
  private routeParam: any;
  private tasks: any;

  constructor(private route: ActivatedRoute,private tasksService:TasksService) {
    this.tasks = tasksService.tasks;
  }


  ngOnInit() {
    this.routeParam = this.route.params.subscribe(params => {
      let taskId = +params['taskId']; // (+) converts string 'id' to a number

      this.task = this.tasks.filter(function(task){
        return task.taskId === taskId;
      })[0];

    });
  }

}
