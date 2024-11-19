import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent {
  // Define el formulario
  contactoForm: FormGroup;

  constructor() {
    this.contactoForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  // Método para manejar el envío
  onSubmit() {
    if (this.contactoForm.valid) {
      console.log('Formulario enviado:', this.contactoForm.value);
      alert('¡Formulario enviado correctamente!');
      this.contactoForm.reset(); // Resetea el formulario después del envío
    } else {
      alert('Por favor, completa correctamente todos los campos.');
    }
  }
}
