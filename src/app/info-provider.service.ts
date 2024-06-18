import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoProviderService {

  constructor(private http:HttpClient) { }

  getResList(): Observable<any> {
    
    return this.http.get<any>('http://localhost:3000/ResList');
  }

  getJobList(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/JobList');
  }

  getJobTaskList(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/JobTaskList');
  }

}

