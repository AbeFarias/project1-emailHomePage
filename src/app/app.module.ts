import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmailItemComponent } from './email-item/email-item.component';
import { EmailListComponent } from './email-list/email-list.component';
import { TruncatePipe } from './truncate.pipe';
import { HighlightDirective } from './highlight.directive';
import { EmailService } from './services/email.service';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmailItemComponent,
    EmailListComponent,
    TruncatePipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    TruncatePipe,
    EmailService,
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
