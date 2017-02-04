import {Component, OnInit, Input} from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  @Input() area:string;
  service;

  constructor(private tasksService:TasksService)  {
    this.service = tasksService;
  }

  ngOnInit() {
  }


}
