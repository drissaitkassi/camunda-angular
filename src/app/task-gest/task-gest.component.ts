import { Component, OnInit } from '@angular/core';
import { CamundaService } from '../services/camunda.service';
import {Task} from "../interfaces/task"
import { FormGroup,FormControl, FormBuilder} from "@angular/forms"


@Component({
  selector: 'app-task-gest',
  templateUrl: './task-gest.component.html',
  styleUrls: ['./task-gest.component.css']
})
export class TaskGestComponent implements OnInit {

  taskList! :Array<Task>
  completeTaskForm! : FormGroup
  requestBody! :object




  constructor(private taskService : CamundaService, private fb :FormBuilder) { }

  ngOnInit(): void {



    this.completeTaskForm =new FormGroup({
      value:new FormControl('')
    })


    this.taskService.getTasks().subscribe({
      next:(data)=> { console.log(data)
        this.taskList=data},
      error:(err)=>console.log("error")
    })

  }

  handleTaskValidation(taskId :string,reqBody:object) {

    this.requestBody={"variables":
        {"taskVariable": this.completeTaskForm.value
        }
    }

    this.taskService.completeTask(taskId,this.requestBody).subscribe({
      next:(data)=>console.log("sucesss"),
      error:(err)=>console.log("error completing task")
    })

  }
}
