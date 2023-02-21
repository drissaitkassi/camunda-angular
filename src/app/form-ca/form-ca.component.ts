import { Component, OnInit } from '@angular/core';
import {CamundaService} from "../services/camunda.service";

@Component({
  selector: 'app-form-ca',
  templateUrl: './form-ca.component.html',
  styleUrls: ['./form-ca.component.css']
})
export class FormCaComponent implements OnInit {

  constructor(private taskService:CamundaService) { }

  ngOnInit(): void {
    this.handelFormInit()
  }

  handelFormInit() {

    this.taskService.getTasks().subscribe({
      next:(data)=>console.log("sucess"),
      error:(err)=>console.log("error")
      }
    );
    console.log("i should see results ")
  // start a process instance (the process should be already deployed )

    // show form

  }
}
