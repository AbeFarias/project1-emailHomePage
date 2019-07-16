import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.scss"]
})
export class MessageFormComponent implements OnInit {
  signupForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      subject: new FormControl(null, Validators.required),
      sendTo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("msgBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    // modal.showModal(id) {
    //   $("#" + id).fadeIn('slow');
    // };

    // modal.hideModal(id) {
    //   $("#" + id).fadeOut('slow');
    // };
  }

  // handleClick(): void {
  //   var modal = document.getElementById("myModal");
  //   this.modal.style.display = "none";
  // }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }
}
