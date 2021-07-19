import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*Estos import son interfaces que establecen la la estructura de los datos del request al servidor*/
import { Clientes } from '../Interfase/Cliente';
import { Response } from '../Interfase/response';

/* esto le manda el tipo de request con el que voy hacer la solicitud*/
const httpOption={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        "Accept": "application/json"
      })
};
@Injectable({
  providedIn: 'root'
})
/* Servicion prooveedor de la url de la app
  Y la seccion donde hago los Request al servidor  
*/
export class ApiClienteService {
  url: string ='http://localhost:9595/api/Clients' ;
  constructor(
    private _http : HttpClient
  ) { }

  getCliente(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  addCliente(cliente: Clientes): Observable<Response>{
    return this._http.post<Response>(this.url,cliente, httpOption)
  }

  editCliente(cliente: Clientes): Observable<Response>{
    return this._http.put<Response>(this.url,cliente,httpOption)
  }

  deleteCliente(id: number): Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`)
  }
  
}
