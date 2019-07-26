import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from './truncate.pipe';
import { HighlightDirective } from './highlight.directive';
import { EmailService } from './services/email.service';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home-page/home-page.module';
import { MessageFormModule } from './message-form/message-form.module';
import { LoginFormModule } from './login-form/login-form.module';
// import { HomePageComponent } from './home-page/home-page.component';

// import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    HighlightDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomePageModule,
    MessageFormModule,
    LoginFormModule,
  ],
  providers: [
    TruncatePipe,
    EmailService,
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
