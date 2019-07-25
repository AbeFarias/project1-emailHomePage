import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-sign-up-form",
  templateUrl: "./sign-up-form.component.html",
  styleUrls: ["./sign-up-form.component.scss"]
})
export class SignUpFormComponent implements OnInit {
  // @ViewChild('password', {static: false}) password: ElementRef;
  // @ViewChild('matcher', {static: false}) matcher: ElementRef;
  public signUpForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      matcher: new FormControl(null, Validators.required),
    });
  }

  // validatePassword(){
  //   if(this.password.value != this.matcher.value) {
  //     this.matcher.setCustomValidity("Passwords Don't Match");
  //   } else {
  //     this.matcher.setCustomValidity('');
  //   }
  // }
  
  // this.password.onchange = validatePassword;
  // this.matcher.onkeyup = validatePassword;
}
