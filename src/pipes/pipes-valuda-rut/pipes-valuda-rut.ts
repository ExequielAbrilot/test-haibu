import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesValidaRut',
})
export class PipesValidaRutPipe implements PipeTransform {

  rut:string;
  dv:string;
 
  transform(value: string): string {
    this.rut = value.split("-")[0];
    this.dv = value.split("-")[1];
    return this.digitoVerificador(this.rut)==this.dv? value: 'Dato corrupto';
  }

  // Codigo obtenido de interenet
  digitoVerificador(T) {
    var M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
}
}
