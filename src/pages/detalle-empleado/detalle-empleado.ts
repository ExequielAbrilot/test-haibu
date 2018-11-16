import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Empleado } from '../../interfaces/empleado.interface';

/**
 * Generated class for the DetalleEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-empleado',
  templateUrl: 'detalle-empleado.html',
})
export class DetalleEmpleadoPage {

  private empleado:Empleado;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.empleado = navParams.data.empleado;
  }

}
