import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageFormComponent } from './message-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MessageFormComponent
  }
]

@NgModule({
  declarations: [ MessageFormComponent ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  providers: []
})
export class MessageFormModule {}
