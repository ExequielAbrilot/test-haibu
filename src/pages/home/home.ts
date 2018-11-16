import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Empleado } from '../../interfaces/empleado.interface';
import { DetalleEmpleadoPage } from '../detalle-empleado/detalle-empleado';
import { EmpleadosProvider } from '../../providers/empleados/empleados.provider';
import { Refresher } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  empleados:Empleado[];
  
  constructor(public navCtrl: NavController, public empProvider_:EmpleadosProvider) {
    empProvider_.obtenerEmpleados().subscribe(res=> this.empleados = res);
  }

  verDetalles(empleado){
    this.navCtrl.push( DetalleEmpleadoPage, { empleado } );
  }

  buscarEmpleado(evento){
    this.empleados = this.empProvider_.buscarEmpleado(evento.target.value);
  }

  recargar(refresher:Refresher){
    this.empProvider_.obtenerEmpleados().subscribe(res=> {
      this.empleados = res; 
      refresher.complete();
    });
  }

}
