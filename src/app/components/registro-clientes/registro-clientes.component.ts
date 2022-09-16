import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.css']
})
export class RegistroClientesComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private router: Router) {
    this.form = this.formBuilder.group({
      id: 0,
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      direccion: ['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }


  guardarCliente(){
    const clientes: cliente = {
      nombre: this.form.get('nombre')!.value,
      apellido: this.form.get('apellido')!.value,
      direccion: this.form.get('direccion')!.value
      

    }

    this.clienteService.guardarCliente(clientes).subscribe(data =>{
      console.log('Guardado exitosamente');
      alert('Guardado Exitosamente')
      this.clienteService.mostrarClientes();
      this.form.reset();
      this.goToPage('listaClientes');
      
      
    })
  }

  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`]);

  }

}
