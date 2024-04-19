import { Component } from '@angular/core';
import {AuthHeadComponent} from "../auth-head/auth-head.component";
import {ButtonComponent} from "../../../ui/button/button.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../../../components/input/input.component";

@Component({
  selector: 'alte-register',
  standalone: true,
  imports: [
    AuthHeadComponent,
    ButtonComponent,
    FormsModule,
    InputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: [ '../auth.style.scss','./register.component.scss']
})
export class RegisterComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })
  submit() {
    console.log(this.form)
    this.form.markAllAsTouched()
  }
}
