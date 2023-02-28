import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';
import {CamundaService} from "../services/camunda.service";

@Component({
  selector: 'app-form-ca',
  templateUrl: './form-ca.component.html',
  styleUrls: ['./form-ca.component.css']
})
export class FormCaComponent implements OnInit {

  constructor(private taskService:CamundaService) { }

  form_ca!:FormGroup
  num_compte!:FormGroup
  date_vrt!:FormGroup
  montant_virement!:FormGroup
  nombre_benificiaire!:FormGroup
  borderaux_cacheter!:FormGroup
  signature_conforme!:FormGroup
  requestBody!:object
  startProcessReqBody!:object



  ngOnInit(): void {

    this.num_compte=new FormGroup({value:new FormControl('')})
    this.date_vrt=new FormGroup({value:new FormControl('')})
    this.montant_virement=new FormGroup({value:new FormControl('')})
    this.nombre_benificiaire=new FormGroup({value:new FormControl('')})
    this.borderaux_cacheter=new FormGroup({value:new FormControl('')})
    this.signature_conforme=new FormGroup({value:new FormControl('')})

    this.form_ca=new FormGroup({
      num_compte:this.num_compte,
      date_vrt:this.date_vrt,
      montant_virement:this.montant_virement,
      nombre_benificiaire:this.nombre_benificiaire,
      borderaux_cacheter:this.borderaux_cacheter,
      signature_conforme:this.signature_conforme
    })

  }


  public handelFormSubmitionCa(){

    //request body
    this.requestBody={"variables":
        {"taskVariable": this.form_ca.value
        }
    }
    console.log("im executed")
    //get task assigned to ca

    this.taskService.getTasks().subscribe({
        next:(data)=>{
          console.log(data)

          data.forEach((d)=>{
          if(d.assignee ="driss"){
            console.log(d)
            this.taskService.completeTask(d.id,this.requestBody).subscribe({
            next:(data)=>console.log("sucesss"),
            error:(err)=>console.log("error completing task")
          })}

        })},
        error:(err)=>console.log("error outer layer")
      }
    );

    //complete task based on id

  }

public handelFormInit() {
  this.startProcessReqBody=
    {
      "variables": {
      }
    }
  this.taskService.getProcess().subscribe({
    next:(data)=>{
      console.log(data[0].id)
      console.log("getting process secessfuly")
      this.taskService.startProcess(data[0].id,this.startProcessReqBody).subscribe({
        next:(data)=>console.log("process started seccefuly"),
        error:(err)=>console.log("process start faild")
      })
    },
    error:(err)=>console.log("failed to get process ")
  })


  }
}


