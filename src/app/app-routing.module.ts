import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
  
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
