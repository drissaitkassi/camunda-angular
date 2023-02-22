import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Task} from "../interfaces/task"

@Injectable({
  providedIn: 'root'
})
export class CamundaService {
  private baseUrl=environment.apiUri
/*  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})}*/

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/task`)
  }

  completeTask(id:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/task/${id}/complete`,"",{headers:{'Content-Type': 'application/json'}})
  }
}
