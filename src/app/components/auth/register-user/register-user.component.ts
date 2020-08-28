import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  form: FormGroup;
  touchedUsername: boolean = false;
  touchedEmail: boolean = false;
  touchedPassword: boolean = false;
  focusUsername: boolean = false;
  focusEmail: boolean = false;
  focusPassword: boolean = false;
  constructor(private fb: FormBuilder, public auth: AuthService) {
    this.crearFormulario();
  }

  ngOnInit(): void {}
  onClickLogin() {
    console.log(this.form);
  }
  crearFormulario() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  blurInput(input: string) {
    if (!this.form.get(input).value) {
      switch (input) {
        case 'username':
          this.touchedUsername = false;
          break;
        case 'email':
          this.touchedEmail = false;
          break;
        case 'password':
          this.touchedPassword = false;
          break;
      }
    }
    switch (input) {
      case 'username':
        this.focusUsername = false;
        break;
      case 'email':
        this.focusEmail = false;
        break;
      case 'password':
        this.focusPassword = false;
        break;
    }
  }
  onFocusUsername() {
    this.touchedUsername = true;
    this.focusUsername = true;
  }
  onFocusEmail() {
    this.touchedEmail = true;
    this.focusEmail = true;
  }
  onFocusPassword() {
    this.touchedPassword = true;
    this.focusPassword = true;
  }
  get UsernameNotValid() {
    return (
      !this.form.get('username').value && this.form.get('username').touched
    );
  }
  get EmailNotValid() {
    return (
      !this.form.get('email').value && this.form.get('email').touched
    );
  }
  get PasswordNotValid() {
    return (
      !this.form.get('password').value && this.form.get('password').touched
    );
  }
}
