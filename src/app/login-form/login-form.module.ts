import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HomePageComponent } from '../home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
    data: {
      title: 'Login'
    }
  },
  // {path: 'home', component:HomePageComponent, data:{title:'home page'}}
]

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  providers: []
})
export class LoginFormModule {}
