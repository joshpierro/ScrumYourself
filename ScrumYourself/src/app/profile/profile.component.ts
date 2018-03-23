import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../profile.service";
import {Profile} from "../models/Profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor(profileService: ProfileService) {
    this.profile = profileService.profile;
  }

  ngOnInit() {
  }

}
