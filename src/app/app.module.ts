import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmailItemComponent } from './email-item/email-item.component';
import { EmailListComponent } from './email-list/email-list.component';
import { TruncatePipe } from './truncate.pipe';
import { HighlightDirective } from './highlight.directive';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailItemComponent,
    EmailListComponent,
    TruncatePipe,
    HighlightDirective,
    LoginFormComponent,
    SignUpFormComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
