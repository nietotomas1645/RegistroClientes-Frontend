import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { RegistroClientesComponent } from './components/registro-clientes/registro-clientes.component';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'registro'
},
{
  path: 'registro',
  component: RegistroClientesComponent
},
{
  path: 'listaClientes',
  component: ListaClientesComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
