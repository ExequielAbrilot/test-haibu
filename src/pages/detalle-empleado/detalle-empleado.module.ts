import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleEmpleadoPage } from './detalle-empleado';

@NgModule({
  declarations: [
    DetalleEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleEmpleadoPage),
  ],
})
export class DetalleEmpleadoPageModule {}
