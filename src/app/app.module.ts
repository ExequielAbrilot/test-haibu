import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Pipes
import { PipesValidaFechaPipe } from '../pipes/pipes-valuda-fecha/pipes-valuda-fecha';
import { PipesValidaRutPipe } from '../pipes/pipes-valuda-rut/pipes-valuda-rut';
import { PipesComunaPipe } from '../pipes/pipes-comuna/pipes-comuna';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalleEmpleadoPage } from '../pages/detalle-empleado/detalle-empleado';

// Provider
import { EmpleadosProvider } from '../providers/empleados/empleados.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalleEmpleadoPage,
    PipesValidaFechaPipe,
    PipesValidaRutPipe,
    PipesComunaPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalleEmpleadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmpleadosProvider
  ]
})
export class AppModule {}
