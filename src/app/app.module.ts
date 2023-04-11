import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TemplatePageComponent } from './template-page/template-page.component';
import { FormCaComponent } from './form-ca/form-ca.component';
import { TaskGestComponent } from './task-gest/task-gest.component';
import { TaskApprobateurComponent } from './task-approbateur/task-approbateur.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: FormCaComponent },
  { path: 'task-approb', component: TaskApprobateurComponent },
  { path: 'task-gest', component: TaskGestComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TemplatePageComponent,
    FormCaComponent,
    TaskGestComponent,
    TaskApprobateurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
