import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page.component";
import { CommonModule } from "@angular/common";
import { EmailItemComponent } from '../email-item/email-item.component';
import { EmailListComponent } from '../email-list/email-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [HomePageComponent, EmailItemComponent, EmailListComponent,],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: []
})
export class HomePageModule {}
