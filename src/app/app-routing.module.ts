import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login-form/login-form.module').then(m => m.LoginFormModule),
    // canActivate: [AuthGuardService]
  },

  { 
    path: 'home-page', 
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
  },

  { path: 'message-form', 
    loadChildren: () => import('./message-form/message-form.module').then(m => m.MessageFormModule),
    // canActivate: [AuthGuardService]
  },

  { path: 'sign-up-form',
    loadChildren: () => import('./sign-up-form/sign-up-form.module').then(m => m.SignUpFormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
// LoginFormComponent, SignUpFormComponent, MessageFormComponent