import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})

export class GitComponent implements OnInit {

  username: string = "";
  response:any;

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  search() {
  this.http.get("https://api.github.com/users/" + this.username)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }


}
