import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  forma: FormGroup;
  touchedUsername:boolean=false;
  touchedPassword:boolean=false;
  focusUsername:boolean=false;
  focusPassword:boolean=false;
  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {}
  onClickLogin(){
    console.log(this.forma);
  }
  crearFormulario() {
    this.forma = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  blurInput(input:string){
    if(!this.forma.get(input).value){
      if (input==='username'){
        this.touchedUsername=false
        this.focusUsername=false
      }else{
        this.touchedPassword=false
        this.focusPassword=false
      }
    }
  }
  onFocusUsername (){
    this.touchedUsername=true 
    this.focusUsername =true
  }
  onFocusPassword (){
    this.touchedPassword=true 
    this.focusPassword =true
  }
  get UsernameNotValid() {
    return (
      this.forma.get('username').invalid && this.forma.get('username').touched
    );
  }
  get PasswordNotValid() {
    return (
      this.forma.get('password').invalid && this.forma.get('password').touched
    );
  }
}
