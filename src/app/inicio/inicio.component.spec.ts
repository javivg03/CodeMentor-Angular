import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent]
    });
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

testimonios = [
  { texto: "CodeMentor ha cambiado mi forma de estudiar.", autor: "Juan Pérez, Estudiante de Desarrollo Web" },
  { texto: "Una herramienta indispensable para organizarme.", autor: "Laura García, Ingeniera de Software" },
  { texto: "El mejor recurso para mejorar mi aprendizaje.", autor: "Carlos Sánchez, Programador Junior" }
];
