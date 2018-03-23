import { Injectable } from '@angular/core';
import {Task} from './Models/Task'

@Injectable()
export class TaskService {

  public tasks:Task[] = [];

  constructor() {
    let fakeTask:Task = new Task();
    fakeTask.name = 'Mow Lawn';
    fakeTask.hours = 1;
    this.tasks.push(fakeTask);
  }

}
