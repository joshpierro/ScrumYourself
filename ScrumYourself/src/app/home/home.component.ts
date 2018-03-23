import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {Profile} from "../models/Profile";
import {Task} from '../Models/Task'
import {TaskService} from "../task.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile:Profile;
  public tasks:Task[];

  constructor(profileService:ProfileService,taskService:TaskService) {
    this.profile = profileService.profile;
    this.tasks  = taskService.tasks;
  }

  ngOnInit() {
  }

}
