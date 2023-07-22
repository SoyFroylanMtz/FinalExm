import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide=true;
  step=0;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required') ) {
      return 'Debes ingresar un valor';
    }else{
      return this.email.hasError('email') ? 'Email no valido' : '';
    }    
       
  }
  getErrorMessageP(){
    if(this.password.hasError('required')){
      return 'Debes ingresar un valor';
     }else{
       return this.password.hasError('password') ? 'Contraseña vacia' : '';
     } 
  }
  
}
