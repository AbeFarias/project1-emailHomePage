import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmailItemComponent } from './email-item/email-item.component';
import { EmailListComponent } from './email-list/email-list.component';
import { TruncatePipe } from './truncate.pipe';
import { HighlightDirective } from './highlight.directive';
import { EmailService } from './services/email.service';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home-page/home-page.module';
import { MessageFormModule } from './message-form/message-form.module';

// import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailItemComponent,
    EmailListComponent,
    TruncatePipe,
    HighlightDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomePageModule,
    MessageFormModule,
  ],
  providers: [
    TruncatePipe,
    EmailService,
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
