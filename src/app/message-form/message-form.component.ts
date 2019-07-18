import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.scss"]
})
export class MessageFormComponent implements OnInit {
  @ViewChild('myModal', {static: false}) modal: ElementRef;
  signupForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      subject: new FormControl(null, Validators.required),
      sendTo: new FormControl(null, [Validators.required, Validators.email]),
      emailBody: new FormControl(null, Validators.required),
      hyperLinks: new FormControl(null, Validators.required),
      CC: new FormControl(null),
      BCC: new FormControl(null),
    });

    // Get the modal
    // var modal = document.getElementById("msgModal");

    // Get the button that opens the modal
    var btn = document.getElementById("msgBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = () => {
      this.modal.nativeElement.style.display = "block";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = () => {
      if (event.target == this.modal.nativeElement) {
        this.modal.nativeElement.style.display = "none";
      }
    };

    // modal.showModal(id) {
    //   $("#" + id).fadeIn('slow');
    // };

    // modal.hideModal(id) {
    //   $("#" + id).fadeOut('slow');
    // };
  }
    
  closeClicker(): void {
    this.modal.nativeElement.style.display = "none";
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }
}
