import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(public clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.mostrarClientes();
  }

}
