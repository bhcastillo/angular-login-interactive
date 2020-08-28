import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  touchedUsername: boolean = false;
  touchedPassword: boolean = false;
  focusUsername: boolean = false;
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
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  blurInput(input: string) {
    if (!this.form.get(input).value) {
      if (input === 'username') {
        this.touchedUsername = false;
      } else {
        this.touchedPassword = false;
      }
    }
    if (input === 'username') {
      this.focusUsername = false;
    } else {
      this.focusPassword = false;
    }
  }
  onFocusUsername() {
    this.touchedUsername = true;
    this.focusUsername = true;
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
  get PasswordNotValid() {
    return (
      !this.form.get('password').value && this.form.get('password').touched
    );
  }
}
