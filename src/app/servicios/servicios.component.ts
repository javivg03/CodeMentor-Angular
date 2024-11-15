import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass']
})
export class ServiciosComponent {
  servicios = [
    {
      id: 'servicio1',
      icon: 'bi bi-file-earmark-arrow-up',
      title: 'Subida de Documentos',
      description: 'Sube tus archivos, PDFs, vídeos y enlaces en un solo lugar para organizarlos fácilmente.',
      details: 'Además de almacenar tus documentos, nuestra plataforma te permite compartir y organizar todo de manera eficiente.'
    },
    {
      id: 'servicio2',
      icon: 'bi bi-search',
      title: 'Recopilación de Información',
      description: 'Con nuestra plataforma, recopila información relevante de forma rápida y ordenada.',
      details: 'Nuestra IA te ayuda a encontrar y organizar artículos, estudios y recursos relevantes para tu aprendizaje.'
    },
    {
      id: 'servicio3',
      icon: 'bi bi-gear',
      title: 'Unificación de Contenido mediante IA',
      description: 'Con nuestra tecnología de IA, puedes unificar todos tus contenidos, generando resúmenes y mejorando la organización.',
      details: 'La inteligencia artificial no solo organiza tus documentos, sino que también genera resúmenes y puntos clave para facilitar el estudio.'
    },
    {
      id: 'servicio4',
      icon: 'bi bi-lightbulb',
      title: 'Recomendaciones Inteligentes',
      description: 'Recibe recomendaciones personalizadas basadas en tu historial de aprendizaje y progreso.',
      details: 'Nuestro sistema de recomendaciones sugiere nuevos recursos, artículos y videos basados en tu actividad anterior.'
    },
    {
      id: 'servicio5',
      icon: 'bi bi-graph-up',
      title: 'Análisis de Datos',
      description: 'Nuestro sistema analiza tus datos y proporciona información valiosa sobre tus hábitos de estudio.',
      details: 'Los análisis proporcionan información sobre tu rendimiento, sugiriendo áreas de mejora.'
    },
    {
      id: 'servicio6',
      icon: 'bi bi-calendar-check',
      title: 'Gestión de Proyectos',
      description: 'Organiza tus proyectos y tareas con facilidad, y haz seguimiento de tu progreso de forma eficiente.',
      details: 'Con nuestra plataforma, puedes gestionar tus proyectos y tareas en un solo lugar para aumentar tu productividad.'
    }
  ];
}
