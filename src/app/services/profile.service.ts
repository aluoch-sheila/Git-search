import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private repos: string;
  private clientid = 'cd9d6200ff4410ca3115';
  private clientsecret = '45bb11281e687f3f5027143f6c024f1709772f50';

  constructor( private http: Http) {
    // console.log('service is now ready');
    this.username = 'aluoch-sheila';
  }
  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username +
     '?client_id=' + this.clientid + '&clientsecret=' + this.clientsecret)
    .pipe(map(res => res.json()));
  }

  getRepoInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?clientsecret=' + this.clientsecret )
    .pipe(map(res => res.json()));

  }

  updateProfile(username: string) {
    this.username = username;


  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/aluoch-sheila/repos');
  }
}
