import { Injectable } from '@angular/core';
import {Profile} from "./models/Profile";

@Injectable()
export class ProfileService {

  public profile:Profile = new Profile();

  constructor() {
    this.profile.capacity = 20;
    this.profile.name = 'Josh'
  }

}
