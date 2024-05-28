import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm=this.formBuilder.group({
    email:['prueba@gmail.com',[Validators.required,Validators.email]],
    password: ['',Validators.required]    
  })
  constructor(private formBuilder:FormBuilder, private router:Router){}
  get email(){
    return this.loginForm.controls.email;
  }
  get password(){
    return this.loginForm.controls.password;
  }
  login(){
    if(this.loginForm.valid){
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl('service');
      this.loginForm.reset();
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }
}
