import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { MessageFormComponent } from "./message-form/message-form.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },

  { 
    path: "login-form", 
    component: LoginFormComponent 
  },

  { path: "message-form", 
    component: MessageFormComponent,
    // canActivate: [AuthGuardService]
  },

  { path: "sign-up-form",
    component: SignUpFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
