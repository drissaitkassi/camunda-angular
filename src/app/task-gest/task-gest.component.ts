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


  requestBody :object ={"variables":
      {"taskvariable": {"value": "yes"}
      }
  }


  constructor(private taskService : CamundaService, private fb :FormBuilder) { }

  ngOnInit(): void {
    

    this.taskService.getTasks().subscribe({
      next:(data)=> { console.log(data)
        this.taskList=data},
      error:(err)=>console.log("error")
    })

  }

  handleTaskValidation(taskId :string,reqBody:object) {



    this.taskService.completeTask(taskId,reqBody).subscribe({
      next:(data)=>console.log("sucesss"),
      error:(err)=>console.log("error completing task")
    })

  }
}
