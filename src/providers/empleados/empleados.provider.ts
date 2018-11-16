import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EmpleadosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmpleadosProvider {

  private urlHaibu:string = 'https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user';
  public empleados: Empleado[];

  constructor(public http: HttpClient) {
    this.http.get<Empleado[]>(this.urlHaibu)
      .pipe(map(res=> res as Empleado[])).subscribe(res=> this.empleados = res);
  }

  obtenerEmpleados(){
    return this.http.get<Empleado[]>(this.urlHaibu)
      .pipe(map(res=> res as Empleado[]));
  }

  buscarEmpleado(terminoBusqueda){
    return this.empleados.filter(cadaEmpleado=>{
      return cadaEmpleado.nombre.toLowerCase().indexOf(terminoBusqueda)>=0 || 
             cadaEmpleado.apellido.toLowerCase().indexOf(terminoBusqueda)>=0
    });
  }

}
