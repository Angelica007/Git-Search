import { Component } from '@angular/core';
import { GitService } from './git-service/git.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private svc: GitService, private http: HttpClient) {
    svc.printToConsole("Service is Ready!")
  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/Angelica007');
    obs.subscribe((response)=> console.log(response));
  }
}
