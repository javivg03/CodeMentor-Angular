# Web Corporativa - RA3 de Horas de Libre Configuración

Este proyecto es una **web corporativa** desarrollada como parte de la asignatura *Horas de Libre Configuración* del grado en **Desarrollo de Aplicaciones Web**. El objetivo principal de esta práctica es consolidar el aprendizaje sobre **Angular 16**, **Bootstrap** y **SASS**, mientras se desarrolla una aplicación web real con un diseño atractivo y funcional.

---

## 🎯 Objetivos del Proyecto

- Configurar un proyecto **Angular** con soporte para **routing** y **SASS**.
- Crear y organizar **componentes** que representen distintas páginas de la web.
- Configurar **rutas** para cada página y permitir la navegación entre ellas.
- Aplicar **estilos** con **Bootstrap** y **personalizaciones** mediante **SASS**.
- Implementar un **diseño atractivo y real**, cuidando la estética de la web.
- Mantener una **estructura visual consistente** con un **header** y un **footer** comunes para todas las páginas.

---

## 🛠️ Tecnologías Usadas

- **Angular 16**: Framework principal para el desarrollo del proyecto.
- **Bootstrap**: Framework de CSS utilizado para la estructura y diseño base.
- **SASS**: Preprocesador de CSS usado para la personalización avanzada de estilos.
- **TypeScript**: Lenguaje base de Angular, con tipado estático.
- **HTML5 y CSS3**: Para la creación de las interfaces y estilos.

---

## 🗂️ Estructura del Proyecto

El proyecto está organizado en **componentes**, cada uno representando una página de la aplicación. Además, el `AppComponent` actúa como contenedor principal, incluyendo el **header** y **footer**.
src/
├── app/
│   ├── components/
│   │   ├── inicio/              # Página "Inicio"
│   │   ├── sobre-nosotros/      # Página "Sobre mi empresa"
│   │   ├── contacto/            # Página "Contacto"
│   │   ├── servicios/           # Página "Servicios"
│   │   └── politica-privacidad/ # Página "Política de privacidad"
│   ├── app.component.html  # Contenedor principal con header y footer
│   ├── app-routing.module.ts # Configuración de rutas
|   ├── styles.sass  # Estilos generales de la aplicación

---

## 🚀 Características Clave

### Sistema de Routing Angular:
- Navegación fluida entre las páginas mediante rutas configuradas en `app-routing.module.ts`.

### Diseño Responsive:
- Uso de **Bootstrap** y **media queries** para garantizar la correcta visualización en dispositivos móviles y pantallas grandes.

### SASS Personalizado:
- **Variables** para una gestión eficiente de los estilos.
- Se aplica **SASS** en cada página para estilos personalizados y consistencia.

### Componentes Reutilizables:
- **Header** y **Footer** definidos en `app.component.html` y usados en toda la aplicación.

### Estética Visual:
- Estilo limpio, moderno y profesional, con un diseño atractivo y alineado con las mejores prácticas de diseño web.

---

## 📝 Requisitos de la Web

La aplicación incluye las siguientes páginas:

1. **Inicio**  
   - Contenido principal de bienvenida.
   - Integración del **header** y **footer**.
   - Diseño atractivo con llamadas a la acción.

2. **Sobre CodeMentor**  
   - Información sobre la empresa, misión, visión y valores.
   - Estilo profesional y alineado con la imagen corporativa.

3. **Contacto**  
   - Formulario funcional con campos para nombre, correo y mensaje.
   - Diseño minimalista y validación de campos con Angular.

4. **Servicios**  
   - Sección que detalla los servicios ofrecidos.
   - Tarjetas estilizadas con íconos y secciones desplegables (Bootstrap Collapse).

5. **Política de Privacidad**  
   - Texto completo sobre las políticas de privacidad de la empresa.
   - Estilo limpio y tipografía agradable para facilitar la lectura.

---

## ⚙️ Cómo Ejecutar el Proyecto

### Clonar el Repositorio:
`
git clone https://github.com/javivg03/CodeMentor-Angular.git
cd CodeMentor-Angular`

###Instalar Dependencias:
`npm install`

###Ejecutar el Proyecto:
`ng serve`

La aplicación estará disponible en http://localhost:4200.

📂 **Directivas Aplicadas**

**Directivas Estructurales:**
- Uso de `*ngFor` para iterar y renderizar listas dinámicas (ej., tarjetas de servicios).
- Uso de `*ngIf` para mostrar contenido condicional (ej., colapsables).

**Directivas Atributo:**
- `ngClass` para cambiar estilos dinámicamente según el estado.

🖌️ **Estilo de la Aplicación**
- **Variables Globales:** Definidas en `styles.sass` para colores, fuentes y espaciados.
- **Diseño Bootstrap:** Se utilizó una combinación de clases de Bootstrap y estilos personalizados en SASS para lograr una apariencia profesional.

🧑‍🏫 **Desarrollado Por**
Javier Villaseñor García
Estudiante de Desarrollo de Aplicaciones Web
Horas de Libre Configuración - Angular 16
