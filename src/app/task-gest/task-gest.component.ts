import { Component, OnInit } from '@angular/core';
import { CamundaService } from '../services/camunda.service';

@Component({
  selector: 'app-task-gest',
  templateUrl: './task-gest.component.html',
  styleUrls: ['./task-gest.component.css']
})
export class TaskGestComponent implements OnInit {

  taskList! :Task[]

  constructor(private taskService : CamundaService) { }

  ngOnInit(): void {

    this.taskService.getTasks().subscribe({
      next:(data)=> this.taskList=data,
      error:(err)=>console.log("error")
    })

  }

}
