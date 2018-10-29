import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  profile: any[];
  username: string;
  repos;
  constructor(private profileService: ProfileService) {

   }
  call_profile() {
    this.profileService. updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log('walai profile inafanya');
      this.profile = profile;
    });
    this.profileService. updateProfile(this.username);
    this.profileService.getRepoInfo().subscribe(repos => {
      console.log('Repos too do work');
      this.repos = repos;


    });
  }

ngOnInit() {
  }
}
