import { Component, OnInit } from '@angular/core';
import { CamundaService } from '../services/camunda.service';
import {Task} from "../interfaces/task"
@Component({
  selector: 'app-task-gest',
  templateUrl: './task-gest.component.html',
  styleUrls: ['./task-gest.component.css']
})
export class TaskGestComponent implements OnInit {

  taskList! :Array<Task>

  constructor(private taskService : CamundaService) { }

  ngOnInit(): void {

    this.taskService.getTasks().subscribe({
      next:(data)=> { console.log(data)
        this.taskList=data},
      error:(err)=>console.log("error")
    })

  }

  handleTaskValidation(taskId :string) {
    this.taskService.completeTask(taskId).subscribe({
      next:(data)=>console.log("sucesss"),
      error:(err)=>console.log("error completing task")
    })

  }
}
