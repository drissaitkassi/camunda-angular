import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TemplatePageComponent } from './template-page/template-page.component';
import { FormCaComponent } from './form-ca/form-ca.component';
import { TaskGestComponent } from './task-gest/task-gest.component';
import { TaskApprobateurComponent } from './task-approbateur/task-approbateur.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
