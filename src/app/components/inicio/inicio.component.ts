import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';


import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class InicioComponent implements OnInit {
  correo: string = '';
  isLoading = false;
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  submitForm(form: NgForm) {
    if (form.invalid) {
      this.openDialog('0ms', '0ms');
      return;

    }
    console.log('Formulario válido. Datos enviados:', form.value);
    this.ValidarContraseña();
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
  openPasswordMismatchDialog() {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message: 'Las contraseñas no coinciden. Por favor, inténtalo nuevamente.' }
    });
  }
  ValidarContraseña() {
    if (this.password !== this.confirmPassword) {
      this.openPasswordMismatchDialog();
    } else {
      console.log('Los campos de contraseña y confirmación coinciden.');
      this.navigation();
    }
  }
}




export class InputFormExample { }
