import {Component, OnInit, signal} from '@angular/core';
import {AuthHeadComponent} from "../auth-head/auth-head.component";
import {InputComponent} from "../../../components/input/input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {ButtonComponent} from "../../../ui/button/button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'alte-login',
  standalone: true,
  imports: [
    AuthHeadComponent,
    InputComponent,
    ReactiveFormsModule,
    JsonPipe,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: [
    '../auth.style.scss',
    './login.component.scss'
  ]
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })
  submit() {
    console.log(this.form)
    this.form.markAllAsTouched()
  }
}
