import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-tasks',
  template: `
  <md-list *ngFor="let task of tasksService.tasks">
  <md-list-item>{{task}}</md-list-item>
</md-list>
  `,
  styles: []
})
export class TasksComponent implements OnInit {

  constructor(private tasksService:TasksService)  {

  }

  ngOnInit() {

  }

}
