import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
backendAppUrl = 'https://localhost:7247/';
backendApiUrl = 'api/clientes';
list!: cliente[];

  constructor(private http: HttpClient) { }

  guardarCliente(cliente: cliente): Observable<cliente>{
    return this.http.post<cliente>(this.backendAppUrl + this.backendApiUrl, cliente);
  }

  mostrarClientes(){
    this.http.get(this.backendAppUrl + this.backendApiUrl).toPromise()
                  .then(data => {
                    this.list = data as cliente[];
                  });
  }
}
