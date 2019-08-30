import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  getGit(){
    return 
  }

  constructor(private http:HttpClientModule) { }
}
