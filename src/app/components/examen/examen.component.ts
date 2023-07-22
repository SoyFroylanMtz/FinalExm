import { Component,OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import {ReactiveFormsModule} from '@angular/forms';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css'],
  standalone: true,
  imports: [FormsModule, 
           MatFormFieldModule, 
           MatInputModule,
           MatIconModule,
           MatDividerModule,
           MatButtonModule,
           ReactiveFormsModule,
           MatDialogModule

]})
export class ExamenComponent implements OnInit {
  correo: string = '';
  isLoading=false;

  


  constructor(private router:Router, public dialog: MatDialog ){}
  
  ngOnInit(): void {
    
  }
  submitForm(form: NgForm) {
    
      if (form.invalid) {
        this.openDialog('0ms', '0ms');
        return;
        
      }
      console.log('Formulario válido. Datos enviados:', form.value);
      this.navigation();
  }
  registro(){
    this.router.navigate(['/inicio'])
  }
  navigation(){
    if (!this.isLoading) {
      this.isLoading = true;
      setTimeout(() => {
        this.router.navigate(['/navigation']);
      }, 2000);
    }

  }
  
 
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

}

}
export class InputFormExample {}