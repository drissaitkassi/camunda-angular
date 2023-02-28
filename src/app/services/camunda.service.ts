import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Task} from "../interfaces/task"
import {Process} from "../interfaces/process"
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class CamundaService {

  allTasks!:Task[]


  private baseUrl=environment.apiUri
  private baseUrlProcess="http://localhost:8081/engine-rest/process-definition?latestVersion=true&name=second-process"
  private baseUrlStartProcess="http://localhost:8081/engine-rest/process-definition"
/*  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})}*/

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/task`)
  }

  getTasksByAssignee(assignee:string):Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/task?assignee=${assignee}`)
  }

  getProcess():Observable<Process[]>{
    return this.http.get<Process[]>(this.baseUrlProcess)
  }
  startProcess(id:string, processBody:object):Observable<any>{
    return this.http.post(`${this.baseUrlStartProcess}/${id}/start`,processBody)
  }

  completeTask(id:string,taskBody:object):Observable<any>{
    return this.http.post(`${this.baseUrl}/task/${id}/complete`,taskBody,{headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'}})
  }
}
