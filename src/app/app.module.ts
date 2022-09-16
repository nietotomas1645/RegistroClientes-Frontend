import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//http request
import{HttpClientModule} from '@angular/common/http';
// reactive forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroClientesComponent } from './components/registro-clientes/registro-clientes.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroClientesComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
