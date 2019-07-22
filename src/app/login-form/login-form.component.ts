import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { environment } from 'src/environments/environment';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})

export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });

    // // Get the modal
    // var modal = document.getElementById("myModal");

    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    //   modal.style.display = "block";
    // };

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // };

  }
  
  handleLoginClick() {
    const form = this.loginForm.value;
    this.rest.get(environment.apiURL + `/users?email=${form.email}&password=${form.password}`)
      .then(res => {
        const userId = res[0].id;
        this.auth.setUserId(userId);
      });
  };
  
  onSubmit() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }
}
