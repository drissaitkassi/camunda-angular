import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { CamundaService } from '../services/camunda.service';
import {Task} from "../interfaces/task"
@Component({
  selector: 'app-task-approbateur',
  templateUrl: './task-approbateur.component.html',
  styleUrls: ['./task-approbateur.component.css']
})
export class TaskApprobateurComponent implements OnInit {

  constructor(private taskService:CamundaService ) { }
  completeTaskForm! : FormGroup
  requestBody! :object
  taskList! :Array<Task>
  ngOnInit(): void {



    this.completeTaskForm =new FormGroup({
      value:new FormControl('')
    })


    this.handelTaskRetrival()

  }

  public handelTaskRetrival(){
    this.taskService.getTasksByAssignee('abdelghaffar').subscribe({
      next:(data)=> {
        this.taskList=data       },
      error:(err)=>console.log("error")
    })
  }

  handleTaskValidation(taskId :string,reqBody:object) {

    this.requestBody={"variables":
        {"taskVariable": this.completeTaskForm.value
        }
    }

    this.taskService.completeTask(taskId,this.requestBody).subscribe({
      next:(data)=> {
        this.handelTaskRetrival()
        console.log("sucesss")
      },
      error:(err)=>console.log("error completing task")
    })

  }
}
