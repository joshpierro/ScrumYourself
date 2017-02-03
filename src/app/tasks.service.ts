import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {


  tasks = [
    {taskId:0,task:'task one',description:'Stuff for task one'},
    {taskId:1,task:'task two',description:'Task two rules'},
    {taskId:2,task:'task three',description:'Dont want to do this'}
  ];

  constructor() { }


}
