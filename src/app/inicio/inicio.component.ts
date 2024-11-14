import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  testimonios = [
    { texto: "CodeMentor ha cambiado mi forma de estudiar.", autor: "Juan Pérez, Estudiante de Desarrollo Web" },
    { texto: "Una herramienta indispensable para organizarme.", autor: "Laura García, Ingeniera de Software" },
    { texto: "El mejor recurso para mejorar mi aprendizaje.", autor: "Carlos Sánchez, Programador Junior" }
  ];

  constructor() {}

  ngOnInit(): void {}
}
